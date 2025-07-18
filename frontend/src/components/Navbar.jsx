import React from 'react'
import Logo from '../Assets/Frontend_Assets/logo.png'
import cart from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex shadow-md bg-slate-200 justify-between  items-centerh-20'>
        
        <Link to='/' className='flex items-center'> <img src={Logo} alt="logo" />
            <p>shopper</p></Link>
        
           
                <ul className='flex gap-3 items-center'>
                    <li ><Link to='/'>Shop</Link></li>
                    <li><Link to='/mens'>Mens</Link></li>
                    <li><Link to ='/womens'>Womens</Link></li>
                    <li><Link to='/kids'>Kids</Link></li>
                </ul>
           
        

       
            <div className='flex items-center'><Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt='cart' /></Link></div>

      
      
    </div>
  )
}

export default Navbar
