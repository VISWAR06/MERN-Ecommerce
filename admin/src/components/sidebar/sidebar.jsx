import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-52  min-h-screen p-4 flex flex-col gap-4 border">
      <h2 className="text-black font-bold text-lg mb-4">Admin Menu</h2>
      <Link to="/addproduct" className="text-black hover:underline">Add Product</Link>
      <Link to="/allproduct" className="text-black hover:underline">All Products</Link>
    </div>
  );
};

export default Sidebar;
