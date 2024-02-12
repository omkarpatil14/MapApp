const express = require("express");
const router = express.Router();
const bcrypt= require("bcrypt")
const User = require("../models/User")



//add user
router.post("/register", async(req,res) => {
    try {
        //generate new password.
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        
        //create new user.
        const newUser = new User({
            userName : req.body.userName,
            email : req.body.email,
            password : hashedPassword
        })

        //save user and send responce.
        const user = await newUser.save()
        console.log('\x1b[42m%s\x1b[0m',"[SUCCESS]Registering user")
        res.status(200).json(user._id)

    }catch(err){
        console.log('\x1b[41m%s\x1b[0m',"[FAILED]Registering user")
        res.status(500).json(err)
    }
})

//lOGIN

router.post("/login", async(req,res)=>{
    try {
       
        const user= await User.findOne({userName:req.body.userName});
        if(user){

            //validate password using compare method
           const validPassword= await bcrypt.compare(req.body.password,user.password);
           if(!validPassword){
            console.log("ERROR AT VALIDATION OF HASHED PASSWORD");
            res.status(400).json("wrong username or password");
           }else{
            console.log("SUCCESS , USER IS VALIDATED ");
            res.status(200).json(user);
           }
        }else{

            //user not found
            console.log("no user found At GET USER");
            res.status(400).json("wrong username or password");
        }
    } catch (error) {
        console.log("ERROR AT GET USER");
        res.status(500).json(error)
    }
})



module.exports= router;