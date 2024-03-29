// import express, path module, and define app as express.
const express = require("express");
const path = require('path')
const app = express();
const mysql = require('mysql2/promise');
require('dotenv').config()



// set working path and app port.
let port = process.env.port || 3001;
const serve = path.join(__dirname, "/dist")
process.chdir(serve)

// page routing.
app.get("/", (req,res) => {
    res.sendFile(serve + "/assets/index.html")
});


app.get("/blog", (req,res) => {
    res.sendFile(serve + "/assets/blog.html")
})

app.get("/bored", (req,res) =>{
    res.sendFile(serve + "/assets/bored.html")
})

app.get("/login", (req,res) => {
    res.sendFile(serve + "/assets/login.html")
})

app.get("/Create", (req,res) => {
    res.sendFile(serve + "/assets/CreateAccount.html")
})

app.post("/Create", (req,res) => {

})

// retrieve webpack bundle
app.get("/bundle.js", (req,res) => {
    res.sendFile(serve + "/bundle.js")
})

// initalize the app.
app.listen(port, () => {
console.log(`View the app at http://localhost:${port}`)
console.log(`listening live on ${port}!`)
});


async function VerifyAccount(Email){
    // check if the email and name is already in the database. Will need to recieve email from the user to check. 
    try {

        const connection = await mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
            password: process.env.password
          });
// placeholder for now. Should be the email of the user.
        
        const [results] = await connection.query(
            `SELECT * FROM ACCOUNTS WHERE Email = ?`, [Email]
        );
        if (results.length === 0) {
            console.log("Email not found, continue....");
        } else {
            console.log("Email was previously Used.")
        }
    } catch(error) {
        console.log(error);
    }
}

async function CreateAccount(){
    // take in the data from the user then create the account in the database. 

    // Provide a session for ten minutes.

    // reroute them to the main page.
}

