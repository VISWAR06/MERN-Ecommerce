import productmodel from "../models/productmodel.js"
export const allpro = (req,res)=>{
    res.status(200).json({mes:'all prdocut'})
}
export const createproduct = async(req,res)=>{
    try{
        const products= await productmodel.create(req.body);
        res.status(201).json({meg:"created succ",products})

    }catch(e){
        res.status(400).json({msg:e.message})

    }
}
