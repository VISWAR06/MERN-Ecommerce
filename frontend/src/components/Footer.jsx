import React from 'react'
import instagrm from '../Assets/Frontend_Assets/instagram_icon.png'
import pintrest from '../Assets/Frontend_Assets/pintester_icon.png'
import logo from '../Assets/Frontend_Assets/logo.png'
const Footer = () => {
  return (
    <div className='bg-green-400'>
        <div>
            <img src={logo} alt="shpeee" />
        </div>
        <div>
            <ul> <li>Company</li>
            <li> Products</li>
            <li>About</li></ul>
           
        </div>
        <div>
            <img src={instagrm} alt="" />
        </div>
        <div>
            <img src={pintrest} alt="" />
        </div>
        <hr/>
        <div>
Copyright @ 2025 - All Rights Reserved
        </div>
      
    </div>
  )
}

export default Footer
