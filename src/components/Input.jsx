import React, { useState } from "react";

const InputField = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserName("");
        setEmail("");
        setPassword("");
      };

    return (
    <form>
        <label htmlFor="UserName">UserName</label>
        <input id="UserName" type="text" onChange={(e) => setUserName(e.target.value)}/>
    
        <label htmlFor="Email">Email</label>
        <input id="Email" type="text" onChange={(e) => setEmail(e.target.value)}/>
    
        <label htmlFor="Password">Password</label>
        <input id="Password" type="text" onChange={(e) => setPassword(e.target.value)}/>

        <button id="submit" onClick={handleSubmit} >Submit</button>
    </form>

)}

export default InputField