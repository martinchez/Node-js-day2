var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});//we have just created a connection to the my sql database

con.connect(function (err) {
    if(err) throw err;//here we are checking for any eerors
    console.log("connected");//this will show us that everything is okey
    con.query("CREATE DATABASE creativeminds" , function (err,result) {//this will crete the database then check for any error
    
        if (err) throw err;
        console.log("database created");
    });
});