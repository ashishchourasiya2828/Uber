const blacklistTokenModel = require("../models/blacklistToken.model");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator")

module.exports.registerUser = async (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log("express-validator-error");
        
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,password,email} = req.body;

    const existingUser = await userModel.findOne({email})
    
    if(existingUser){
        return res.status(400).json({message: "Email already exists"})
    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname, 
        password: hashedPassword,
        email
    })

    const token = user.generateAuthToken()

    res.status(201).json({user, token})
}

module.exports.loginUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');
    // console.log(user);
    
    if(!user){
        return res.status(401).json({message:"Invalid email or password"})
    }
    
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
      return res.status(401).json({message:"invalid email or password"});
    }

    const token = user.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({user,token})
}

module.exports.getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req,res,next)=>{
    
    const token = req.cookies.token || req.headers.authorization.split(' ')[0]
    
    await blacklistTokenModel.create({token})
    res.clearCookie('token');

    res.status(200).json({message:"logout user"});
}