import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user

export const loginUser = async (req,res)  => {

}


//register user

const createToken  = async (req,res) => {
    return jwt.sign({id},proccess.env.JWT_SECRET) 
}

export const registerUser = async (req,res) => {

    const {name,password,email} =  req.body;
    
    try{
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success:false,message:"User Already exists"})
        }

        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid Email"})
        }
        
        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong Password"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })


       const user =  await newUser.save();
       const token  = createToken(user._id)
       res.json({success:true,token});

    }
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
