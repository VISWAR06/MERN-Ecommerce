const jst=require(JsonWebTokenError)
module.exports=(req,res,next)=>{
    try{
        const token=req.header('Authorization')?.replace("Beare",' ')
        if(!token)throw new Error();
        const decode = jwt.verify(token,process.env.SECRET_KEY)
        req.user=decode
        next();

    }catch(e)
    {
res.status(401).json({message:e.message})
    }
}