import React from 'react'
import newproducts from '../Assets/Frontend_Assets/new_collections'
import Item from './Item'
const Newcollections = () => {
  return (
    <div>
        <h1>NEW COLLECITONS</h1>
        <div>
            {newproducts.map((item,index)=>
<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        )}
        </div>

      
    </div>
  )
}

export default Newcollections
