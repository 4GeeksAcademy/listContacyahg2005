import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Dashboard Principal</span>
            </Link>
            <div className="ml-auto">
                <Link to="/contacts">
                <button className="btn btn-primary" aria-label="View Contacts">View Contacts</button>
                </Link>
                <Link to="/add" className="ml-2">
                <button className="btn btn-success" aria-label="Add New Contact">Add New Contact</button>
                </Link>
            </div>
        </nav>
    );
};
