var mysql=require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"creativeminds"//enter the database you created in the previouse tutorial or which you want to add the table into

});

con.connect(function name(params) {
    if (err) throw err;
    console.log("connected");
    var sql= "CREATE TABLE viewer (name VACHAR(255), address VACHAR(255))";
    con.query(sql,function (err,result) {
        if(err) throw err;
        console.log("Table create!");
    });
});