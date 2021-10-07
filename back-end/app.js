var express = require("express");
var app = express();
var cors = require("cors");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

var mongoose = require("mongoose");
//var mongoose1 = require("mongoose");

mongoose.connect('mongodb+srv://vamshi:vamshi@cluster0.jc65s.mongodb.net/casestudy',() =>{
    console.log("Hotel Database Connected");
});



var route = require('./routes/room');
app.use('/', route)
var route1 = require('./routes/guests');
app.use('/', route1)
var route2 = require('./routes/booking');
const { response } = require("express");
app.use('/', route2)



app.listen(3000,() => {
    console.log('Listening to port for requests');
})