import React from 'react'
import data_product from '../Assets/Frontend_Assets/data'
import Item from './Item'
const Related = () => {
  return (
    <div>
        <div>RELATED ITEMS</div>
        <div>
            {data_product.map((item,i)=>(
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            ))}
        </div>
      
    </div>
  )
}

export default Related
