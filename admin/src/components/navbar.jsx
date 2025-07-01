import React from 'react'
import { assets } from '../../../Frontend/src/assets/frontend_assets/assets'

const navbar = () => {
  return (
    <div>
       <img className= 'w-[max[10%' src={assets.logo} alt="" />
        <button>logout</button>

      
    </div>

  )
}

export default navbar
