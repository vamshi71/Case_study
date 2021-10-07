var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var axios = require("axios");
var Room = require('../models/Room')
var Booking = require('../models/Booking');
const { response } = require("express");

router.get('/booking',function(req,res){
    Booking.find().then((bookings) => {
        res.status(201).json(bookings)
    }).catch(err =>{
        if(err){
            res.status(404).json(bookings)
            throw err;
        }
    })
})

router.get('/booking/:id',function(req,res){
    Booking.findById(req.params.id).then((bookings) => {
        if(bookings){
        res.status(201).json(bookings)
        }else{
            res.sendStatus(400);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.post('/booking',function(req,res){
    var newBooking = {
        roomNo:  req.body.roomNo,
        name: req.body.name,
        children: req.body.children,
        adult: req.body.adult,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        days:req.body.days
    }
    var booking = new Booking(newBooking)
    booking.save().then(() => {
        console.log("New Booking Created")
        // var rno=req.body.roomNo
        Room.findOneAndUpdate({roomNo:114},{status:"unAvailable"}).then((err)=>{
            if(err)
            {
                console.log(err);
            }

        })      
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})


router.delete('/booking/:id',function(req,res){
    Booking.findByIdAndRemove(req.params.id).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

module.exports = router;

