import {v2 as cloudinary} from 'cloudinary'
import productmodel from '../models/productmode.js'
const addproduct = async (req,res)=>{
    try{
 const {name,description,sizes,category,subcategory,bestsellers,price}=req.body
    const image1=req.files.image1 && req.files.image1[0]
    const image2=req.files.image2 && req.files.image2[0]
    const image3=req.files.image3 && req.files.image3[0]
    const image4=req.files.image4 && req.files.image4[0]
   const images = [image1,image2,image3,image4].filter((item)=>item!==undefined)
  let imageurl = await Promise.all(
  images.map(async (item) => {
    let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
    return result.secure_url;
  })
);
const uploadproduct = new productmodel({
  name,description,sizes : JSON.parse(sizes),image:imageurl,category,subcategory,bestsellers: bestsellers==="true"?true:false,price,date:Date.now()
})
await uploadproduct.save()

   res.status(200).json({message:"uploaded successfully"})
    }catch(e){
      
        res.status(400).json({message:e.message})
    }
   


}
const removeproduct = async (req,res)=>{

}
const listproduct = async(req,res)=>{

}
const singleproduct = async(req,res)=>{

}
export {addproduct,removeproduct,listproduct,singleproduct}