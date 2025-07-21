import React from 'react';
import star from '../Assets/Frontend_Assets/star_icon.png';
import dullstar from '../Assets/Frontend_Assets/star_dull_icon.png';

const Display = ({ product }) => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Product Images */}
      <div className="flex gap-2 mb-4">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            className="h-32 w-32 object-cover border"
            src={product.image}
            alt={`Product view ${i + 1}`}
          />
        ))}
      </div>

      {/* Main Product Image */}
      <div className="mb-4">
        <img
          className="w-full max-h-96 object-contain"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Product Name */}
      <div className="text-xl font-semibold mb-2">{product.name}</div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-1">
        {[...Array(4)].map((_, i) => (
          <img key={i} src={star} alt="star" className="h-5 w-5" />
        ))}
        <img src={dullstar} alt="dull star" className="h-5 w-5" />
        <p className="ml-2 text-sm text-gray-600">(112)</p>
      </div>

      {/* Price */}
      <div className="text-lg font-bold text-green-600 mb-2">
        ${product.new_price}
      </div>

      {/* Description */}
      <div className="mb-4 text-gray-700 text-sm">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ipsam
          incidunt! Maxime laboriosam optio maiores accusamus, omnis error totam
          voluptatem iusto molestiae ipsa ipsam voluptates ea reiciendis cumque
          quis? Provident.
        </p>
      </div>

      {/* Sizes */}
      <div className="mb-4">
        <h2 className="font-medium mb-1">SELECT SIZE</h2>
        <div className="flex gap-3">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-100"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div>
        <button className="bg-red-600 text-white h-12 w-32 rounded hover:bg-red-700">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Display;
