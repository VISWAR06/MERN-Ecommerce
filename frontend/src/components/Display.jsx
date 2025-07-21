import React from 'react';
import star from '../Assets/Frontend_Assets/star_icon.png';
import dullstar from '../Assets/Frontend_Assets/star_dull_icon.png';

const Display = ({ product }) => {
  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      {/* Product Images */}
      <div className="flex gap-2">
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 1" />
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 2" />
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 3" />
        <img className="h-32 w-32 object-cover border" src={product.image} alt="image 4" />
      </div>

      {/* Main Image */}
      <div>
        <img className="w-full max-h-96 object-contain border" src={product.image} alt="main" />
      </div>

      {/* Product Name */}
      <div>
        <p className="text-xl font-semibold">{product.name}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={star} alt="star" className="h-5 w-5" />
        <img src={dullstar} alt="dullstar" className="h-5 w-5" />
      </div>

      <p className="text-sm text-gray-600">(112)</p>

      {/* Price */}
      <div className="text-lg font-bold text-green-600">
        ${product.new_price}
      </div>

      {/* Description */}
      <div>
        <p className="text-sm text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ipsam incidunt! Maxime laboriosam optio maiores accusamus, omnis error totam voluptatem iusto molestiae ipsa ipsam voluptates ea reiciendis cumque quis? Provident.
        </p>
      </div>

      {/* Size Options */}
      <div>
        <h2 className="font-medium mb-2">SELECT SIZE</h2>
        <div className="flex gap-2">
          <div className="border px-4 py-1 cursor-pointer hover:bg-gray-100">S</div>
          <div className="border px-4 py-1 cursor-pointer hover:bg-gray-100">L</div>
          <div className="border px-4 py-1 cursor-pointer hover:bg-gray-100">M</div>
          <div className="border px-4 py-1 cursor-pointer hover:bg-gray-100">XL</div>
          <div className="border px-4 py-1 cursor-pointer hover:bg-gray-100">XXL</div>
        </div>
      </div>

      {/* Add to Cart */}
      <div>
        <button className="bg-red-600 text-white h-12 w-32 rounded hover:bg-red-700">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Display;
