import React from 'react'
import newproducts from '../Assets/Frontend_Assets/new_collections'
import Item from './Item'
const Newcollections = () => {
  return (
    <div className='bg-purple-50 border border-gray-700'>
        <h1 className='flex justify-center text-3xl font-bold'>NEW COLLECITONS</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
            {newproducts.map((item,index)=>
<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        )}
        </div>

      
    </div>
  )
}

export default Newcollections
