import React, { useState } from "react";

const Login =  () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userName, password)
        fetch('/login', {

            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, password})
        })
    }
    return (
        <form id="CreationForm">
        <label className="InputLabel" htmlFor="UserName">Please your Username.</label>
        <input className="InputField" id="UserName" type="text" autoComplete="username" onChange={(e) => setUserName(e.target.value)}/>
    
        <label className="InputLabel" htmlFor="Password">Please enter your password. </label>
        <input className="InputField" id="Password" type="text" autoComplete="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button id="submit" onClick={handleSubmit} >Submit</button>
        </form>
    )}


export default Login