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
      fetchProducts(); 
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allprdt.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            {product.image && (
              <img
                src={`http://localhost:5000/uploadimage/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">Category: {product.category}</p>
              <p className="text-gray-800 font-medium mb-3">Price: ${product.new_price}</p>
              <button
                onClick={() => removeProduct(product._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
              >
                Delete Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
