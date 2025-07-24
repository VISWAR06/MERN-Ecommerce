import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-6 fixed top-0 left-0 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link
          to="/addproduct"
          className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        >
          ➕ Add Product
        </Link>
        <Link
          to="/allproduct"
          className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        >
          📦 All Products
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
