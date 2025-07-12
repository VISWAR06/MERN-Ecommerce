const users=require('../models/Usermodel')
const signup = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const check=await users.findBy({email})
        if(check){
            res.status(400).json({message:"user alredy there"})
        }

    }catch(e){

    }
}