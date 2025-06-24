import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Policy = () => {
  return (
    <div>
      <div>
        <div>
            <img src={assets.exchange_icon} alt="exchng" />
            <p>easy to exchange</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="exchng" />
            <p>We check for quality</p>
        </div>
        <div>
            <img src={assets.support_img} alt="exchng" />
            <p>we support 24/7</p>
        </div>
      </div>
    </div>
  )
}

export default Policy
