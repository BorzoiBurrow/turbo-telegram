// Get the client
import mysql from 'mysql2/promise';

require('dotenv').config()

// Create the connection to database
const connection = await mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
});

async function VerifyAccount(){
    // grab the email and Username from database

    // check if the email and name is already in the database

    // If either is present, return false. Otherwise return True

}

async function CreateAccount(){
    // take in the data from the user then create the account in the database. 

    // Provide a session for ten minutes.

    // reroute them to the main page.
}


export {VerifyAccount, CreateAccount}