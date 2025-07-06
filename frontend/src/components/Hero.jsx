import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
  return (
   <div className="bg-gradient-to-br from-blue-400 to-purple-500">

      <div>
        <h1>Latest arrivas</h1>
        <h2><Link to='/men'>For Men</Link></h2>
        <h2><Link to='/women'>For Women</Link></h2>
        <h2><Link to='/kid'>For Kids</Link></h2>
    </div> 
    <div>
        <img src={hero} alt='img' />
    </div>
    </div>
  )
}

export default Hero
