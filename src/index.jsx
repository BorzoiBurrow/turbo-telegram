import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./components/header";
import "../src/assets/css/index.css";

// testing message for dev 
console.log("hello!")

// await DOM load before executing react elements.
window.addEventListener("DOMContentLoaded", function () {
    const headerRoot = createRoot(document.getElementById('headerRoot')).render(<Header/>);
});