import React, { useState } from 'react';
import axios from 'axios';
import uploadarea from '../assets/Admin_Assets/upload_area.svg';

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productdetail, setProductDetail] = useState({
    id: '',
    name: '',
    new_price: '',
    category: 'men',
  });

  const imagesetter = (e) => {
    setImage(e.target.files[0]);
  };

  const handlechange = (e) => {
    setProductDetail({ ...productdetail, [e.target.name]: e.target.value });
  };

  const add = async () => {
    try {
      if (!image) {
        alert('Please select an image');
        return;
      }

      const formData = new FormData();
      formData.append('image', image);
      formData.append('id', productdetail.id);
      formData.append('name', productdetail.name);
      formData.append('category', productdetail.category);
      formData.append('new_price', productdetail.new_price);

      const response = await axios.post('http://localhost:5000/api/addproduct', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        alert('Product added successfully');
        setProductDetail({ id: '', name: '', new_price: '', category: 'men' });
        setImage(null);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded w-full max-w-2xl">
      <p className="mb-1 font-medium">Product ID</p>
      <input
        type="text"
        name="id"
        value={productdetail.id}
        onChange={handlechange}
        placeholder="Enter product ID"
        className="mb-4 w-full border p-2 rounded"
      />

      <p className="mb-1 font-medium">Product Name</p>
      <input
        type="text"
        name="name"
        value={productdetail.name}
        onChange={handlechange}
        placeholder="Type here"
        className="mb-4 w-full border p-2 rounded"
      />

      <p className="mb-1 font-medium">Price</p>
      <input
        type="text"
        name="new_price"
        value={productdetail.new_price}
        onChange={handlechange}
        placeholder="Type Price"
        className="mb-4 w-full border p-2 rounded"
      />

      <p className="mb-1 font-medium">Category</p>
      <select
        name="category"
        value={productdetail.category}
        onChange={handlechange}
        className="mb-4 w-full border p-2 rounded"
      >
        <option value="men">men</option>
        <option value="women">women</option>
        <option value="kid">kid</option>
      </select>

      <div className="mb-4">
        <label htmlFor="file-input" className="cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : uploadarea}
            alt="upload"
            className="w-40 h-40 object-contain border rounded"
          />
        </label>
        <input
          type="file"
          id="file-input"
          name="image"
          accept="image/*"
          onChange={imagesetter}
          hidden
        />
      </div>

      <button
        onClick={add}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </div>
  );
};

export default Addproduct;
