import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import ContactCard from '../components/ContactCard';

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts();  // Solo llamar a fetchContacts una vez cuando el componente se monte
    }, []);  // Asegúrate de que este array de dependencias esté vacío

    if (!store.contacts || !Array.isArray(store.contacts)) {
        return <div>Loading contacts...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Contact List</h1>
            <div className="row">
                {store.contacts.length > 0 ? (
                    store.contacts.map(contact => (
                        <div className="col-sm-6 col-md-4" key={contact.id}>
                            <ContactCard contact={contact} slug="" />
                        </div>
                    ))
                ) : (
                    <p>No contacts found.</p>
                )}
            </div>
        </div>
    );
};

export default Contact;
