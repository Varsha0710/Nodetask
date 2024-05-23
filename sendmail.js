var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'varshagajendran701@gmail.com',
        pass: 'rjzq gvcc iigj dqhz'
    }
});

var mailOptions = {
    from: 'varshagajendran701@gmail.com',
    to: 'varshagaji99@gmail.com',
    subject: 'sending email using node.js',
    text: 'that was easy'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('email sent:' +info.response);
    }
});