import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const cartCount = 3;

  return (
    <div className='flex justify-between items-center px-6 py-4 bg-white shadow-md'>
      <div>
        <Link to ={'/'}><img src={assets.logo} alt="logo" className='h-10 w-auto' /></Link>
      </div>

      <div className='w-1/2'>
        <ul className='flex justify-evenly text-black font-medium py-2 rounded-md'>
          <li><NavLink to="/" className='hover:text-red-600'>Home</NavLink></li>
          <li><NavLink to="/collection" className='hover:text-red-600'>Collection</NavLink></li>
          <li><NavLink to="/about" className='hover:text-red-600'>About</NavLink></li>
          <li><NavLink to="/contact" className='hover:text-red-600'>Contact</NavLink></li>
        </ul>
      </div>

      <div className='flex gap-6 items-center relative'>
        <img src={assets.search_icon} alt="search" className='h-6 w-6 cursor-pointer' />

        <div className='group relative'>
          <img src={assets.profile_icon} alt="profile" className='h-6 w-6 cursor-pointer' />
          <div className='group-hover:block hidden absolute right-0 pt-4 z-10'>
            <div className='flex flex-col gap-2 py-3 px-5 w-36 bg-slate-400 text-black rounded shadow-lg'>
              <p className='cursor-pointer'>Profile</p>
              <p className='cursor-pointer'>My Orders</p>
              <p className='cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>

        <div className='relative cursor-pointer'>
          <img src={assets.cart_icon} alt="cart" className='h-6 w-6' />
          {cartCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full'>
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
