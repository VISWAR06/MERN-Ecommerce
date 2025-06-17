import Usermodel from "../models/usermode.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const token=(id)=>{
    return jwt.sign({id},process.env.SECRET)
}
const login = async(req,res)=>{
    res.json({message:"wordk"})
}
const register = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const exist= await Usermodel.findOne({email})
        if(exist){
            return res.status(400).json({message:"user alredy exist"})
        }
        if(password.length<8){
            return res.status(400).json({message:"provide strong password"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:'provide valid email'})
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
        const newuser = new Usermodel({
            name,password:hash,email
        })
        const create = newuser.save()
        const ctoken = token(create._id);

return res.status(200).json({message:"user created"})

    }catch(e){
        console.log(e.message)
        res.status(500).json({message:e.message})

    }
}
export {login,register}