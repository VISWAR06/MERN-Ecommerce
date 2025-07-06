import jwt from 'jsonwebtoken'

const adminauth = async (req,res,next)=>{
    try{ const {adtoke} = req.headers
      if(!adtoke)return res.status(400).json({message:'not authorized'})
    const verify = jwt.verify(adtoke,process.env.JWT_SECRET)
  
    if(verify !== process.env.ADMIN_PASS)return res.status(400).json({message:'not authorized'})
        next()

    }catch(e){
        res.status(400).json({message:e.message})
    }
   
}
export default adminauth