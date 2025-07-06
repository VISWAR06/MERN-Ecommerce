import React from 'react'
import star from '../Assets/Frontend_Assets/star_icon.png'
import dullstar from '../Assets/Frontend_Assets/star_dull_icon.png'
const Display = (products) => {
    const {product}=products;
  return (
    <div>
        <div >
            <img className='h-32' src={product.image} alt="image" />
            <img className='h-32'src={product.image} alt="image" />
            <img className='h-32'src={product.image} alt="image" />
            <img className='h-32'src={product.image} alt="image" />
        </div>
        <div> <img   src={product.image} alt="" /></div>
        <div><p>{product.name}</p></div>
        <div className='flex'>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={dullstar} alt="dullstar" />
        </div>
        <p>(112)</p>
       
    </div>
  )
}

export default Display
