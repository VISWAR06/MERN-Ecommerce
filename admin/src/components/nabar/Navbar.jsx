import React from 'react';
import logo from '../../assets/admin_assets/nav-logo.svg';
import profile from '../../assets/Admin_Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold text-gray-800">Admin Panel</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm hidden md:inline">Welcome, Admin</span>
        <img
          src={profile}
          alt="profile"
          className="h-10 w-10 border border-gray-300 shadow-sm"
        />
      </div>
    </nav>
  );
};

export default Navbar;
