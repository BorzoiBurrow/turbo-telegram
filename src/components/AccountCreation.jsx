import React, { useState } from "react";

const Creation = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const EmailRegex = /^[^@]+@[^.]+\..+$/
    const UserNameRegex = /^.{4,32}$/
    const PasswordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).{8,128}$/
    const handleSubmit = (event) => {
        event.preventDefault();
        if (EmailRegex.test(email) === false){
            alert("Please enter a valid email address.")
            return;
        } else if  (UserNameRegex.test(userName) === false){
            alert("Invalid username, UserName must be atleast 8 characters and no more than 48 characters.")
            return;
        } else if (PasswordRegex.test(password) === false){
            alert("Invalid password. It must contain atleast one special character, a number, and a minimum of 8 characters with a max of 128 characters.")
            return;
        }

      };

    return (
    <form>
        <label htmlFor="UserName">Please enter a UserName. Your username Should be atleast 8 characters, and no more than 48 characters.</label>
        <input id="UserName" type="text" autoComplete="username" onChange={(e) => setUserName(e.target.value)}/>
    
        <label htmlFor="Email">Please enter your email.</label>
        <input id="Email" type="text" autoComplete="Email" onChange={(e) => setEmail(e.target.value)}/>
    
        <label htmlFor="Password">Please create a password. Your password should be atleast 8 characters, contain one special character and a number.</label>
        <input id="Password" type="text" autoComplete="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button id="submit" onClick={handleSubmit} >Submit</button>
    </form>

)}

export default Creation