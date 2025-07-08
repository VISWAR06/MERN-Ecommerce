const uploadimage = async(req,res)=>{
    try{
        res.send(200).json({message:uploaded})

    }catch(e){
        res.send(401).json({message:e.message})
    }

}
module.exports={uploadimage}