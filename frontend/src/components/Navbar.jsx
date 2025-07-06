import React from 'react'
import Logo from '../Assets/Frontend_Assets/logo.png'
import cart from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
            <img src={Logo} alt="logo" />
            <p>shopper</p>
        </div>
        <div>
            <div>
                <ul>
                    <li ><Link to='/'>Shop</Link></li>
                    <li><Link to='/mens'>Mens</Link></li>
                    <li><Link to ='/womens'>Womens</Link></li>
                    <li><Link to='/kids'>Kids</Link></li>
                </ul>
            </div>
        </div>

        <div>
            <div><button>Login</button></div>
            <div><div><img src={cart} alt='cart' /></div></div>
        </div>
      
    </div>
  )
}

export default Navbar
