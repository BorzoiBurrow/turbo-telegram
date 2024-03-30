import React, { useState } from "react";

const Signup = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const UserNameRegex = /^.{4,32}$/
    const PasswordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).{8,128}$/

    const handleSubmit = (event) => {
        event.preventDefault();
            if  (UserNameRegex.test(userName) === false){
            alert("Invalid username, UserName must be atleast 8 characters and no more than 48 characters.")
            return;
        } else if (PasswordRegex.test(password) === false){
            alert("Invalid password. It must contain atleast one special character, a number, and a minimum of 8 characters with a max of 128 characters.")
            return;
        } else{
            try {
                fetch('/Create', {

                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({userName, password})
                })
            } catch(err) {
                console.error(err);
            }
        }};


    return (
    <form id="CreationForm">
        <label className="InputLabel" htmlFor="UserName">Please enter a UserName. Your username Should be atleast 8 characters, and no more than 48 characters.</label>
        <input className="InputField" id="UserName" type="text" autoComplete="username" onChange={(e) => setUserName(e.target.value)}/>
    
        <label className="InputLabel" htmlFor="Password">Please create a password. Your password should be atleast 8 characters, contain one special character and a number.</label>
        <input className="InputField" id="Password" type="text" autoComplete="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button id="submit" onClick={handleSubmit} >Submit</button>
    </form>

)}

export default Signup