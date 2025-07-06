import React from 'react'
import data_product from '../Assets/Frontend_Assets/data'
import Item from './Item'
const Womensitem = () => {
  return (
    <div>
        <h1>POPULAR IN WOMENS</h1>
        <div>
            {data_product.map((item,index)=>(
                <Item id={item.id} key={index} image={item.image} new_price={item.new_price} name={item.name}  />
            ))}
        </div>
      
    </div>
  )
}

export default Womensitem
