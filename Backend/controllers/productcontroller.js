const addprdt = async (req,res)=>{
try{
const {name,description,sizes,price,category,subcategory,bestsellers}=req.body
 const image1=req.files.image1 && req.files.image1[0]
 const image2=req.files.image2 && req.files.image2[0]
 const image3=req.files.image3 && req.files.image3[0]
 const image4=req.files.image4 && req.files.image4[0]
 const image5=req.files.image5 && req.files.image5[0]
 console.log(name,description,sizes,price,category,subcategory,bestsellers)
 console.log(image1,image2,image3,image4,image5)
 res.send("working perfect")
}catch(e){
res.json({message:e.message})
}
}
const listprdt = async(req,res)=>{
res.json({message:"correct"})
}
const removeprdt = async(req,res)=>{
res.json({message:"correct"})
}
const singleprdt=async(req,res)=>{
res.json({message:"correct"})
}
export {addprdt,listprdt,removeprdt,singleprdt}