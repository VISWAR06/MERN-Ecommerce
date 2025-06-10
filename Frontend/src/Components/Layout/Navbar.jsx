import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <>
  <nav className='flex  justify-between items-center px-7'>
    <div className=' text-black font-bold font-extrabold'>  <Link to='/'>Aurelian</Link></div>
    <div className='flex gap-6'>
        <Link t0='-'>Men</Link>
        <Link t0='-'>Women</Link>
        <Link t0='-'>Kids</Link>
    </div>
    <div className='flex gap-6 '>
        <button>Profile</button>
        <button>Cart</button>
        <button>Search</button>
    </div>
  
  </nav>
  </>
}

export default Navbar
