const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'password'
  }
});

const mailOptions = {
  from: 'yourmail@gmail.com',
  to: 'daemonlite73@gmail.com,khemikal2016@gmail.com',
  subject: 'try this out',
  html: '<h1>Welcome to github</h1><a href="github.com/login">Login now!</a>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    
  }
});
