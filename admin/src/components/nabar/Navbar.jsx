import React from 'react'
import logo from '../../assets/admin_assets/nav-logo.svg'
import profile from '../../assets/Admin_Assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='flex'>
   <div>
    <img src={logo} alt="logo" />
   </div>
   <div>
    <img src={profile} alt="profile" />
   </div>
    </div>
  )
}

export default Navbar
