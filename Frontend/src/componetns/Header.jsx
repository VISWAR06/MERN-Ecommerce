import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between items-center w-full h-12 shadow-lg'>
      <div>LOGO</div>
      {/* <div className=''>
        <Link to='/'>Shop</Link>
        <Link to='/men'>Men</Link>
        <Link to='/women'>Women</Link>
        <Link to='/kids'>Kids</Link>
      </div> */}
      <div className='flex gap-4'>
        <button className='bg-red-400 rounded-2xl cursor-pointer'>login</button>
        <button>cart</button>
        <button>profile</button>
      </div>
    </div>
  )
}

export default Header

