//start by adding formidable module
//npm install formidable
var http = require('http');
var formidable=require('formidable');


http.createServer(function (req,res) {
    if (req.url == './fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req,function (err,fields,files){
            res.write('File uploaded');
            res.end();
        });

    } else{
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');//action section
        res.write('<input type="file" name="filetoupload"> <br>');//ipload file
        res.write('<input type="submit">');//submit button
        res.write('</form>');//clossing the form
        return res.end();
    }
}).listen(8080);