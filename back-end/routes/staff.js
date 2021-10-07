var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var Staff = require('../models/Staff');
var Manager = require('../models/Manager')

var app = express();

router.get('/staff',async function(req,res){
    Staff.find().then((staff) => {
        res.status(200).json(staff)
    }).catch(err =>{
        if(err){
            res.status(404).send('verification Failed')
        }
    })
})

router.get('/staff/:id',async function(req,res){
    Staff.findById(req.params.id).then((staff) => {
        if(staff){
        res.end(200).json(staff)
  
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            res.status(404).send(err);
            throw err;
        }
    })
})


router.post('/staff',async function(req,res){
    var newRec = {
        empName:  req.body.empName,
        empAddress: req.body.empAddress,
        nic: req.body.nic,
        salary: req.body.salary,
        age: req.body.age,
        occupation: req.body.occupation,
        email:req.body.email
    }
    var staff = new Staff(newRec)
    console.log(staff);
        staff.save().then(() => {
        console.log("New Record added in Staff");
        res.send("Success");
    }).catch((err) => {
        if(err){
            res.status(404).send(err);
            throw err;
            
        }
    })
    res.send('success');
})

router.delete('/staff/:id',async function(req,res){
    Staff.findByIdAndRemove(req.params.id).then(() =>{
        res.status(200).send("Deleted")
    }).catch(err =>{
        if(err){
            res.status(400).send('not deleted')
            throw err;
            
        }
    })
})

router.put('/staff/:id',async function(req,res){
    var newRec = {
        empName:  req.body.empName,
        empAddress: req.body.empAddress,
        nic: req.body.nic,
        salary: req.body.salary,
        age: req.body.age,
        occupation: req.body.occupation,
        email:req.body.email
    }
    Staff.findByIdAndUpdate(req.params.id,{$set:newRec}).then(()=>{
        res.status(200).send('Updated')
    }).catch(err =>{
        if(err){
            res.status(400).send('not deleted')
            throw err;
            
        }
    })
})
  router.post('/msignup',async function(req,res){
    const { username, password } = req.body;

  try {
    const manager = await Manager.create({ username, password });
    const token = createToken(manager._id);
    res.send({token});
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
})
  

  
  router.post('/mlogin', async function(req,res){
    const { username, password } = req.body;
  
    try {
      const manager = await Manager.login(username, password);
      const token = createToken(manager._id);
      res.send({token});
  
    } catch (err) {
      if(err){
      console.log(err)
      res.status(400).json({});
      }
    }
  })

 
  
module.exports = router;