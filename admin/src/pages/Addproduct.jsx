import React, { useState } from 'react'
import uploadarea from '../assets/Admin_Assets/upload_area.svg'
const Addproduct = () => {
    const [image,setImage]=useState(false)
    const[productdetail,setProductDetail]=useState({
        name:"",
        new_price:"",
        category:"men",
        image:""
    })
    const imagesetter=(e)=>{
      return   setImage(e.target.files[0])
    }
    const handlechange= (e)=>{
        setProductDetail({...productdetail,[e.target.name]:e.target.value})
    }
    const add=async()=>{
        console.log(productdetail)
    }
  return (
    <div>
      <div>
        <p>Product name</p>
        <input onChange={handlechange} value={productdetail.name} type="text" name="name" placeholder='Type here' />
        <p>price</p>
        <input onChange={handlechange} value={productdetail.price} type="text" name="new_price" placeholder='Type Price' />
       <p>category</p>
        <select onChange={handlechange} value={productdetail.category}>
            <option value="men">men</option>
            <option value='women'>women</option>
            <option value='kid'>kid</option>
        </select>
        <div>
            <label htmlFor='file-input'>   <img src={image?URL.createObjectURL(image):uploadarea} alt="" /></label>
         <input onChange={imagesetter}type='file' name='image' id='file-input' hidden />
        </div>
      </div>
      <button onClick={()=>{add()}}>Add Product</button>
    </div>
  )
}

export default Addproduct
