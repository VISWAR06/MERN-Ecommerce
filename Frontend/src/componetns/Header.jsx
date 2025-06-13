import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div >
      <div>LOGO</div>
      <div >
        <Link to='/'>Shop</Link>
        <Link to='/men'>Men</Link>
        <Link to='/women'>Women</Link>
        <Link to='/kids'>Kids</Link>
      </div>
      <div className='felx gap-6'>
        <button>login</button>
        <button>cart</button>
        <button>profile</button>
      </div>
    </div>
  )
}

export default Header

