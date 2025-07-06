import React from 'react'
import Logo from '../Assets/Frontend_Assets/logo.png'
import cart from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
        <Link to='/'> <img src={Logo} alt="logo" />
            <p>shopper</p></Link>
           
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
            <div><Link to='/login'><button>Login</button></Link></div>
            <div><div><Link to='/cart'><img src={cart} alt='cart' /></Link></div></div>
        </div>
      
    </div>
  )
}

export default Navbar
