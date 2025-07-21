import React from 'react';
import star from '../Assets/Frontend_Assets/star_icon.png';
import dullstar from '../Assets/Frontend_Assets/star_dull_icon.png';

const Display = ({ product, onAddToCart }) => {
  return (
    <div className="p-4 max-w-xl mx-auto space-y-4 border rounded-lg shadow">
      {/* Images */}
      <div className="flex gap-2">
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 1" />
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 2" />
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 3" />
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 4" />
      </div>

      <div>
        <img className="w-full max-h-96 object-contain border" src={product.image} alt="main" />
      </div>

      <p className="text-xl font-semibold">{product.name}</p>

      <div className="flex items-center gap-1">
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={dullstar} alt="dullstar" className="h-5 w-5" />
        <p className="ml-2 text-sm text-gray-600">(112)</p>
      </div>

      <div className="text-lg font-bold text-green-600">${product.new_price}</div>

      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum.
      </p>

      <div>
        <h2 className="font-medium mb-2">SELECT SIZE</h2>
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
          className="bg-red-600 text-white h-12 w-32 rounded hover:bg-red-700"
          onClick={() => onAddToCart(product)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Display;
