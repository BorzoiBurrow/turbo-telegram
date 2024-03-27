// import express, path module, and define app as express.
const express = require("express");
const path = require('path')
const app = express();

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
app.get("/signin", (req,res) => {
    res.sendFile(serve + "/assets/signin.html")
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
