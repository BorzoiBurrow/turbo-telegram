import React from "react";
import { createRoot } from 'react-dom/client';
import { Header, Footer, About, Signup, Login} from "./components";
import "../src/assets/css/index.css";

// await DOM load before executing react elements.
window.addEventListener("DOMContentLoaded", function () {
    const headerRoot = createRoot(document.getElementById('headerRoot')).render(<Header />);
    const footerRoot = createRoot(document.getElementById('footerRoot')).render(<Footer />);

    if (window.location.pathname === "/blog") {


    } else if (window.location.pathname === "/bored") {


    } else if(window.location.pathname === "/login") { 

          const loginRoot = createRoot(document.getElementById('loginRoot')).render(<Login />)

    } else if (this.window.location.pathname === "/create"){

          const ForumRoot = createRoot(document.getElementById('ForumRoot')).render(<Signup />);

    } else {

          const aboutRoot = createRoot(document.getElementById('aboutRoot')).render(<About />);
    }
    
});
