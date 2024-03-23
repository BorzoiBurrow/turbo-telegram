import React from "react";
import { createRoot } from 'react-dom/client';
import { Header, Footer} from "./components";
import "../src/assets/css/index.css";

// await DOM load before executing react elements.
window.addEventListener("DOMContentLoaded", function () {
    const headerRoot = createRoot(document.getElementById('headerRoot')).render(<Header />);
    const footerRoot = createRoot(document.getElementById('footerRoot')).render(<Footer />);
});