import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtén el ID del contacto desde la URL
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const existingContact = store.contacts.find(c => c.id === parseInt(id));
            if (existingContact) {
                setContact(existingContact); // Si hay un ID, carga los datos del contacto existente
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
        // Si hay un ID en la URL, estamos en modo edición
        const success = await actions.updateContact(id, contact);
        if (success) {
            navigate('/'); // Redirige a la lista de contactos después de actualizar
        }
    } else {
        // Si no hay ID, estamos en modo creación
        const success = await actions.addContact(contact);
        if (success) {
            navigate('/'); // Redirige a la lista de contactos después de guardar
        }
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={contact.name || ''}  // Asegurarse de que siempre haya un valor definido
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={contact.email || ''}  // Asegurarse de que siempre haya un valor definido
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="text"
                name="phone"
                value={contact.phone || ''}  // Asegurarse de que siempre haya un valor definido
                onChange={handleChange}
                placeholder="Phone"
            />
            <input
                type="text"
                name="address"
                value={contact.address || ''}  // Asegurarse de que siempre haya un valor definido
                onChange={handleChange}
                placeholder="Address"
            />
            <button type="submit">{id ? 'Update Contact' : 'Save Contact'}</button>
        </form>
    );
};

export default AddContact;
