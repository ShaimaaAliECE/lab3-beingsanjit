//sshar374 Lab3
//connecting to GCP server

const mysql = require("mysql");

function newConnection() {
    let conn = mysql.createConnection({
        host: "35.238.112.142",
        user: "root",
        password: "myPassword",
        database: "myUsers",
    });
    return conn;
}

module.exports = newConnection;