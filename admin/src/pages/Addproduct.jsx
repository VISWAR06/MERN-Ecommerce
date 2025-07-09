import React from 'react'
import uploadarea from '../assets/Admin_Assets/upload_area.svg'
const Addproduct = () => {
  return (
    <div>
      <div>
        <input type="text" name="name" placeholder='Type here' />
        <input type="text" name="new_price" placeholder='Type Price' />
       
        <select>
            <option value="men">men</option>
            <option value='women'>women</option>
            <option value='kid'>kid</option>
        </select>
        <div>
            <label htmlFor='file-input'>   <img src={uploadarea} alt="" /></label>
         <input type='file' name='image' id='file-input' hidden />
        </div>
      </div>
      <button>Add Product</button>
    </div>
  )
}

export default Addproduct
