//working  with mysql data lets create a connection
//start by installing mysql module

var mysql= require('mysql');

var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});
con.connect(function (err) {
    if(err) throw err;
    console.log("connected");
});