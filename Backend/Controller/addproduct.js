const addproduct=async(req,res)=>{
    const{prdt}=req.body;
    try{
        const addprdt=new Product({
            id:prdt.id,
            name:prdt.name,
            image:prdt.image,
            category:prdt.category,
            new_price:prdt.new_price
        })
        await addprdt.save();
        res.status(200).json({message:"product added"})
        
    }catch(e){
        res.status(400).json({message:e.message})
    }


}


module.exports={addproduct}