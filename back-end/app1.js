var express = require("express");
var mongoose = require("mongoose");
// var nodemailer=require('nodemailer');
var app = express();
var cors = require("cors");
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//const jwt = require('jsonwebtoken')

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));



mongoose.connect('mongodb+srv://vamshi:vamshi@cluster0.jc65s.mongodb.net/casestudy',() =>{
    console.log("User Database Connected");
});

var route3 = require('./routes/auth');
app.use('/', route3)
var route4 = require('./routes/staff');
app.use('/', route4)
app.listen(3001,() => {
    console.log('Listening to port for requests');
})

/*
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}*/

// const transport = nodemailer.createTransport( {
//     service: "gmail" ,
//     auth: {
//         user:"keerthanasp1999@gmail.com",
//         pass:"Keerthu"
  
//     }
//   });
  
//   const options= {
//     from:"",
//     to:"keerthanasurapuramsp@gmail.com",
//     subject:"VERIFY ADMIN-ALERT  ",
//     text:"You have been logged-in the Indian Railways Admin Portal.Do not reply if its you.FROM VARSHINI S(IR-DEVELOPER). "
  
//   };
  
//   transporter.sendMail(options,function(err,info)
//   {
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log("sent:"+info.response);
// })
//   //run()
