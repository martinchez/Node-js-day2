//start by add nodemailer modules to assit you im sending mails
var nodemailer = require('nodemailer');
var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'admin@servdev.co.ke',//enter your email
        pass:'admin123'//enter your password of your actual email
    }
});
var mailOptions ={
    from:'your from email',
    to:'the other email',
    subject:'testing sending email with nodemailer',
    text:'Learning node js with @creative minds'
};

transporter.sendMail(mailOptions , function (error,info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent :' + info.response);
    }
});