const getState = ({ getStore, getActions, setStore }) => {

    const slug = 'brr';  // Usaremos este slug para todas las operaciones

    return {
        store: {
            contacts: []  // Aquí se almacenará la lista de contactos cargados desde la API
        },
        actions: {
            // Cargar los contactos desde la API
            fetchContacts: async () => {
                console.log('Fetching contacts...');
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);
                    if (!response.ok) {
                        console.error('Error fetching contacts:', response.statusText);
                        return false;
                    }
                    const data = await response.json();
                    console.log('Contacts fetched:', data.contacts);
                    setStore({ contacts: data.contacts });
                    return true;
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                    return false;
                }
            },
            

            // Añadir un nuevo contacto
            addContact: async (contact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });
            
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Contact added successfully:", data);
                        await getActions().fetchContacts();
                        return true;
                    } else {
                        console.error("Failed to add contact:", await response.text());
                        return false;
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                    return false;
                }
            },
            
            

            // Actualizar un contacto existente
            updateContact: async (contact_id, updatedContactData) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contact_id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedContactData),
                    });
            
                    if (response.ok) {
                        await getActions().fetchContacts();
                        return true;  // Indica que la actualización fue exitosa
                    } else {
                        const errorText = await response.text();
                        console.error('Failed to update contact:', errorText);
                        return false;
                    }
                } catch (error) {
                    console.error('Error updating contact:', error);
                    return false;
                }
            },
            

            // Eliminar un contacto
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        await getActions().fetchContacts(); // Recargar la lista de contactos después de eliminar uno
                        return true;
                    } else {
                        const errorText = await response.text();
                        console.error('Failed to delete contact:', errorText);
                        return false;
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                    return false;
                }
            },
        }
    };
};

export default getState;
