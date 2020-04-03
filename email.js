var nodemailer= require('nodemailer');
var transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'admin@servdev.co.ke',
        pass:'martinwaish1'
    }
});

var mailOptions={
    from:'admin@servdev.co.ke',
    to: 'martinchege1998@gmail.com',
    subject: 'using nodemailer to send emails',
    text: ''
}