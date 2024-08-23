import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Contact from "./views/Contact";  // Importa el componente Contact
import AddContact from "./views/AddContact";  // Importa el componente AddContact
import injectContext from "./store/appContext";  // Utiliza tu appContext

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/contacts" element={<Contact />} />  {/* Nueva ruta para listar contactos */}
                        <Route path="/add" element={<AddContact />} />  {/* Nueva ruta para agregar contactos */}
                        <Route path="/edit/:id" element={<AddContact />} />  {/* Nueva ruta para editar contactos */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
