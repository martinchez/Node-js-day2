//here we will do the three parts create the form upload perse the save the form
var http= require('http');
var formidable= require('formidable');
var fs = require('fs');

http.createServer(function (req,res) {
    if (req.url =='./fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            var oldpath= files.filetoupload.path;
            var newpath= 'c:/users/marcode/'+ files.filetoupload.name;
            fsrename(oldpath,newpath, function (err) {
                if(err) throw err;
                res.write('file uploaded and moved sucessfuly');
            });
        });
    } else {//here we are going to write what will be displayed to get the form
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-upload">');
        res.write('<input type="file" name="filetoupload"> <br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);