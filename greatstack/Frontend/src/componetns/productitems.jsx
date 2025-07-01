import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopcontext } from '../context/shopcontext';
import ProductItems from '../componetns/productitems';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(shopcontext);
  const [productdata, setProductdata] = useState(null);

  const getProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductdata(foundProduct);
    }
  };

  useEffect(() => {
    getProductData();
  }, [products, productId]);

  return productdata ? (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{productdata.name}</h1>
      <div className="flex space-x-4">
        {Array.isArray(productdata.image) &&
          productdata.image.map((img, index) => (
            <div key={index} className="w-48 h-48">
              <img
                src={img}
                alt={productdata.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
      <div className="mt-4 text-lg font-semibold">
        Price: ₹{productdata.price}
      </div>
    </div>
  ) : (
    <div className="p-6">Loading...</div>
  );
};

export default Product;
