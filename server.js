// import express, path module, and define app as express.
const express = require("express");
const path = require('path')
const app = express();

// set working path and app port.
let port = process.env.port || 3001;
const serve = path.join(__dirname, "/dist")
process.chdir(serve)

// home page routing.
app.get("/", (req,res) => {
    res.sendFile(serve + "/assets/pages/index.html")
});

app.get("/bundle.js", (req,res) => {
    res.sendFile(serve + "/bundle.js")
})
// initalize the app.
app.listen(port, () => {
console.log(`View the app at http://localhost:${port}`)
console.log(`listening live on ${port}!`)
});
