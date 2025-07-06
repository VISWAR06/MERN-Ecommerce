import React from 'react'
import exclusive from '../Assets/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='bg-purple-200'>
      <div>
        <h1>Exclusive offers</h1>
        <h2>Offers for you</h2>
        <h3>Only on the sellers products</h3>
      </div>
      <div>
        <img src={exclusive} alt="img" />
      </div>
    </div>
  )
}

export default Offers
