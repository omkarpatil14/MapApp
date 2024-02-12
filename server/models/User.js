const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
       min:3,
       max:20,
       unique:true,
    },
    email: {
      type: String,
      required: true,
      max:50,
      unique:true,
      
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user",UserSchema);

module.exports= User;
