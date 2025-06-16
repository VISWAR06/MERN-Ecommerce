import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import usermodel from '../models/usermode'
import validator from 'validator'
const login = async (req,res)=>{

}

const register=async(req,res)=>{

    const {name,email,password}=req.body
    if(!validator.isEmail(email)){
        return res.status(400).json({message:'provide a valid email'})
    }
    const exist = await usermodel.findOne({email})
    if(exist)return res.status(400).json({message:'user already'})
    if(password.length<8)return res.status(400).json("provide strng password")
    const salt =await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const newuser= new usermodel({
        name,
        email,
        password:hash
    })
    const save = await newuser.save()

}

const admin = async (req,res)=>{

}
 export {login,register,admin}