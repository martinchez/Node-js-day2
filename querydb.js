//we are going to query fro the database using node js
var mysql= require('mysql');

var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

con.connect(function (err) {
    if(err) throw err;
    console.log('connected!');
    con.query(sql, function (err,result) {
        if(err) throw err;
        console.log("result:" + result);
    });
});