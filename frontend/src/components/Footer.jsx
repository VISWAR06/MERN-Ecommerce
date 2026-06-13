import React from 'react';
import instagram from '../Assets/Frontend_Assets/instagram_icon.png';
import pinterest from '../Assets/Frontend_Assets/pintester_icon.png';
import logo from '../Assets/Frontend_Assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-purple-50 py-8 px-4">
     
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
        
       
        <div>
          <img src={logo} alt="shpeee" className="w-[120px]" />
        </div>

        
        <div>
          <ul className="flex flex-col md:flex-row gap-4 text-gray-700 font-medium">
            <li className="hover:text-purple-600 cursor-pointer">Company</li>
            <li className="hover:text-purple-600 cursor-pointer">Products</li>
            <li className="hover:text-purple-600 cursor-pointer">About</li>
          </ul>
        </div>

        
        <div className="flex gap-4">
          <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
          <img src={pinterest} alt="Pinterest" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

     
      <hr className="border-gray-300 mb-4" />

      
      <div className="text-center text-sm text-gray-600">
        © 2025 Shpeee. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
