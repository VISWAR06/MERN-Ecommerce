import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Policy = () => {
  return (
    <div>
      <div className='flex justify-evenly w-full'>
        <div className='w-40 flex flex-col items-center p-4'>
          <img 
            className='w-16 h-16 object-contain mb-2' 
            src={assets.exchange_icon} 
            alt="exchange" 
          />
          <p className='text-center text-white'>easy to exchange</p>
        </div>
        <div className='w-40 flex flex-col items-center p-4'>
          <img 
            className='w-16 h-16 object-contain mb-2' 
            src={assets.quality_icon} 
            alt="quality" 
          />
          <p className='text-center'>We check for quality</p>
        </div>
        <div className='w-40 flex flex-col items-center p-4'>
          <img 
            className='w-16 h-16 object-contain mb-2' 
            src={assets.support_img} 
            alt="support" 
          />
          <p className='text-center'>we support 24/7</p>
        </div>
      </div>
    </div>
  )
}

export default Policy
