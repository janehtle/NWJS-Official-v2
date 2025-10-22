import mysql from "mysql2"; //able to use import because we're working in React?
import dotenv from 'dotenv';
dotenv.config();


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect(error => { 
    if (error) {
        console.error("Unable to connect to database.", error.stack); /* err.stack: property of Error objs that provides a stack trace, 
                                                                    a string representing point(s) in the code at which the Error was instantiated. 
                                                                    Stack trace includes error message and detailed path the execution took through 
                                                                    the code before error was thrown, showing function calls that led to error */
        return;
    }
    console.log("Connected to database!");
})

export default connection;