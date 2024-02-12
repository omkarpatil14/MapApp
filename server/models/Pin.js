const {Schema, model}= require("mongoose")

const PinSchema = new Schema({
    userName:{
        type:String,
        required:true,
        default:"user_01",
    },
    title:{
       type:String,
       required:true,
       min:3,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    lat:{
        type:Number,
        required:true,
    },
    lon:{
        type:Number,
        required:true,
    },
    descr:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const Pin= model("pin",PinSchema);

module.exports= Pin;