console.log("---------------------------------------------------------");
console.log("Homework> week2> controller >databaseConfig.js");
console.log("---------------------------------------------------------");

// ---------------------------------------
// imports
// ---------------------------------------
var mysql = require('mysql');

const {Pool} = require('pg');

// ---------------------------------------
// object / functions
// ---------------------------------------

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "akinom1811",
            database: "week2hwaplsydev"
        });     


        return conn;
    }
};

// ---------------------------------------
// exports
// ---------------------------------------

module.exports = dbconnect