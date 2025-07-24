import React from 'react';
import logo from '../../assets/admin_assets/nav-logo.svg';
import profile from '../../assets/Admin_Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold text-gray-800">Admin Panel</span>
      </div>
   <div>
    <img src={profile} alt="profile" />
   </div>
    </div>
  )
}

export default Navbar
