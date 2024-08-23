import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const ContactCard = ({ contact, slug }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        console.log(`Deleting contact with ID: ${contact.id}`);
        if (window.confirm("Are you sure you want to delete this contact?")) {
            actions.deleteContact( contact.id);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">
                    <strong>Phone:</strong> {contact.phone}<br />
                    <strong>Email:</strong> {contact.email}<br />
                    <strong>Address:</strong> {contact.address}
                </p>
                <Link to={`/edit/${contact.id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-danger ml-2" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
