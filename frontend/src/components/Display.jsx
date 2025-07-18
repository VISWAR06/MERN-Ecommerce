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
        <div>${product.new_price}</div>
        <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ipsam incidunt! Maxime laboriosam optio maiores accusamus, omnis error totam voluptatem iusto molestiae ipsa ipsam voluptates ea reiciendis cumque quis? Provident.</p></div>
        <div><h2>SELECT SIZE</h2>
        <div>S</div>
        <div>L</div>
        <div>M</div>
        <div>XL</div>
        <div>XXL</div>
        </div>
        <div><button className='bg-red-600 h-12 w-32'>ADD TO CART</button></div>
       
    </div>
  )
}

export default Display
