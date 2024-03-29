import React from "react";


const Header = () => {
    // handles button presses for navbar, logic still needs to made
    const handleClick = (buttonName) => {
        const actions = {
            "Home": () => window.location.href ="/",
            "bored?": () => window.location.href = "/bored",
            "blog": () => window.location.href = "/blog",
            "sign-in": () => window.location.href = "/login",
            "default": () => {
                console.log("button name was invalid, verify that the button is passing the correct name, or that the object case supports the button.");
                console.log(`The button name that was pressed is ${buttonName}`);
            }}; 
    (actions[buttonName] || actions["default"])(); 
}; 
    return (
        <menu className="navbar">
            <li className="navbar-item">
                <button onClick={() => handleClick("Home")} className="navbar-card">
                <div>Home</div>
                </button>
            </li>
            <li className="navbar-item">
                <button onClick={() => handleClick("bored?")} className="navbar-card">
                <div>bored?</div>
                </button>
            </li>
             <li className="navbar-item">
                <button onClick={() => handleClick("blog")} className="navbar-card">
                <div>blog</div>
                </button>
            </li>
            <li className="navbar-item">
            <button onClick={() => handleClick("sign-in")} className="navbar-card">
                <div>login</div>
                </button>
            </li>
        </menu>
    )
}

export default Header