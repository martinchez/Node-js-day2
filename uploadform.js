//we are going to create an upload form using node js

var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200,{'content-Type': 'text/html'});
    res.write('<form action ="fileupload" method="post" enctype="muiltipart/form-data">');
    res.write('<input type="file" name="fileupload> <br>');
    res.write('<input type="submit">');
    res.write('</form>');

    return res.end();
}).listen(8080);