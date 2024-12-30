const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


const userSchema  = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,'firstname must be 3 characters long']
        },
        lastname:{
            type: String,
            minlength:[3,'firstname must be 3 characters long']
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength:[5,"email must be 5 characters long"]
    },
    password:{
        type: String,
        required: true,
        minlength:[6,"password must be 6 characters long"],
        select: false,
    },
    socketId:{
        type: String,
        // required: true
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"})
    return token; 
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password); // Use regular function to access `this.password`
}


userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user',userSchema)

module.exports = userModel;