import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="h-[75vh] flex px-5 m-4">
      
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TakeIn</h1>
        <NavLink to='/collections'>shop now</NavLink>
      </div>

      <div className="w-1/2 h-full flex justify-end">
        <img src={assets.hero_img} alt="hero" className="w-full h-full object-cover" />
      </div>
      
    </div>
  )
}

export default Hero
