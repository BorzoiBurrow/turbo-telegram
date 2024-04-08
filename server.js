require('dotenv').config()
const express = require("express");
const path = require('path')
const app = express();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const saltRounds = 15;
const session = require('express-session')

app.set('trust proxy', 1) 
app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false
}
}))

app.use(express.json());

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

// testing route for cookies.
app.get("/profile", (req, res) => {
    if(!req.session.userName){
        res.send("No username was found.")
    }
    else{
        const userName = req.session.userName;
        res.send(`Username in cookie was ${userName}`)
    }
});

app.post("/login", async (req, res) => {
    const { userName, password } = req.body;

    try {
        const userExists = await VerifyAccount(userName);
        if (!userExists) {
            res.status(404).send("User not found! Check your credientials.");
            return;
        }

        const passwordMatch = await VerifyPassword(userName, password);

        if (!passwordMatch) {
            res.status(401).send("Invalid password. Verify the password is correct.");
            return;
        }
        req.session.userName = userName;
        res.status(200).send("Login success!");

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

app.post("/Create", async (req,res) => {
    const {password, userName } = req.body;
    const UserNameRegex = /^.{4,32}$/
    const PasswordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).{8,128}$/
    
    try {
         if  (UserNameRegex.test(userName) === false){
            res.status(400).send("Invalid username, UserName must be atleast 8 characters and no more than 48 characters.")
            return;
        } else if (PasswordRegex.test(password) === false){
            res.status(400).send("Invalid password. It must contain atleast one special character, a number, and a minimum of 8 characters with a max of 128 characters.")
            return;
        } else if (await VerifyAccount(userName) === true){
            res.status(409).send("Invalid Username, The userName was already in use.")
            return;
        } 
        else {
            req.session.userName = userName;
            await CreateAccount(password, userName)
            res.status(200).send("Account created.")
            }
    } catch (error) {
         console.error(error)
    }})

// retrieve webpack bundle
app.get("/bundle.js", (req,res) => {
    res.sendFile(serve + "/bundle.js")
})

// initalize the app.
app.listen(port, () => {
console.log(`View the app at http://localhost:${port}`)
console.log(`listening live on ${port}!`)
});

// checks if the username exists, returning true if it doesn't, and false if it does.
async function VerifyAccount(userName){
    try {
        const connection = await mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
            password: process.env.password
          });
        const [results] = await connection.query(
            `SELECT * FROM ACCOUNTS WHERE UserName = ?`, [userName]
        );
        if (results.length === 0) {
            return false;
        } else {
            await connection.end();
            return true;
        }
    } catch(error) {
        console.log(error);
    }
}

// check the password with the hashed version for equivalancy. 
async function VerifyPassword(userName, password){
    try {
        const connection = await mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
            password: process.env.password
          });
        const [results] = await connection.query(
            `SELECT * FROM ACCOUNTS WHERE UserName = ?`, [userName]
        );

        hashedPW = results[0].Pass
       const validty = await bcrypt.compare(password, hashedPW)
        await connection.end();
        if(validty){
            return true;
        }
        else {
            return false;
        }
    } catch(error) {
        console.log(error);
    }
}

async function CreateAccount(password, userName){
    try {
        const connection = await mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
            password: process.env.password
        });
            const hashedPW = await hashData(password)
           await connection.query(
            `INSERT INTO Accounts (UserName, Pass) VALUES (?, ?)`,
            [userName,hashedPW]
        );
} catch(error){
        console.error(error)
}};

async function hashData(item) {
    try {
        const hash = await bcrypt.hash(item, saltRounds);
        return hash;
    } catch (error) {
        console.error('Error hashing', error);
        throw error;
    }
}
