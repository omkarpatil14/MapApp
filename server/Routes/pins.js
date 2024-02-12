const express = require("express")
const Pin = require("../models/Pin")
const router= express.Router();

//creating pin
router.post("/",async(req,res)=>{
    const pinCandidate= new Pin(req.body);
  try{
    const savedPin = await pinCandidate.save();
     res.status(200).json(savedPin);
    console.log("SUCCESS PIN ADDED !!!");
  }catch(err){
    console.log("ERROR AT PIN ADDED !!!");
    res.status(500).json(err);
  }
})

//get all pins

router.get("/",async(req,res)=>{
    try {
        const pins = await Pin.find({});
        console.log("SUCCESS GOT ALL PINS !!!");
        res.status(200).json(pins);
    } catch (error) {
        console.log("ERROR AT GETTING ALL PINS !!!");
        res.status(200).json(error);
    }
})



module.exports= router;

