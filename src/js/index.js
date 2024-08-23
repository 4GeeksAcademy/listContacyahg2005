//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap aquí

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)
