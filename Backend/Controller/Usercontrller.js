const users=require('../models/Usermodel')
const signup = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const check=await users.findOne({email})
        if(check){
            res.status(400).json({message:"user alredy there"})
        }
        const add=users({
            name,
            email,
            password
        })
        await add.save()
        res.status(200).json({message:"user created"})

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
module.exports={signup}