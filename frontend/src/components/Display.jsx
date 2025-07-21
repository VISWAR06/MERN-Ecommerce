import React from 'react';
import star from '../Assets/Frontend_Assets/star_icon.png';
import dullstar from '../Assets/Frontend_Assets/star_dull_icon.png';

const Display = ({ product, onAddToCart }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-6">
      <div className="w-full md:w-1/2 flex gap-4">
        <div className="flex flex-col gap-2">
          <img className="h-20 w-20 object-cover border" src={product.image} alt="img1" />
          <img className="h-20 w-20 object-cover border" src={product.image} alt="img2" />
          <img className="h-20 w-20 object-cover border" src={product.image} alt="img3" />
          <img className="h-20 w-20 object-cover border" src={product.image} alt="img4" />
        </div>
        <div className="flex-1 border p-2">
          <img
            className="w-full max-h-[500px] object-contain"
            src={product.image}
            alt="Main Product"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>

        <div className="flex items-center gap-1">
          <img src={star} alt="star" className="h-5 w-5" />
          <img src={star} alt="star" className="h-5 w-5" />
          <img src={star} alt="star" className="h-5 w-5" />
          <img src={star} alt="star" className="h-5 w-5" />
          <img src={dullstar} alt="dullstar" className="h-5 w-5" />
          <p className="ml-2 text-gray-500 text-sm">(112 reviews)</p>
        </div>

        <div className="text-xl text-green-600 font-semibold">
          ${product.new_price}
        </div>

        <div className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis deleniti voluptate iste.
        </div>

        <div>
          <h3 className="font-medium mb-2">SELECT SIZE</h3>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className="border px-4 py-1 cursor-pointer hover:bg-gray-100"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    
  );
};

export default Display;
