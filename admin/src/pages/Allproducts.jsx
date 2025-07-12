import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Allproducts = () => {
  const [allprdt, setAllprdt] = useState([]);
 
 

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/allproduct');
      setAllprdt(res.data);
    } catch (error) {
      
      console.error('Error:', error);
    } 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/removeproduct/${id}`);
      fetchProducts(); // Refresh the list
    } catch (error) {
    
      console.error('Delete error:', error);
    }
  };


  return (
    <div >
      <h1>All Products</h1>
      <div >
        {allprdt.map((product) => (
          <div key={product._id} >
            {product.image && (
              <img
                src={`http://localhost:5000/uploadimage/${product.image}`}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.new_price}</p>
            <button 
              onClick={() => removeProduct(product._id)}
              
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;