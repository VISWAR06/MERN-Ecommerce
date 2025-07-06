import React from 'react'
import Logo from '../Assets/Frontend_Assets/logo.png'
import cart from '../Assets/Frontend_Assets/cart_icon.png'
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
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
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
