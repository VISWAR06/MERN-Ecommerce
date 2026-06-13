import React from 'react'
import {Link} from 'react-router-dom'
const sidebar = () => {
  return (
    <div className='flex gap-10'>
   <Link to='/addproduct' className='border bg-blue-700 text-white rounded-sm'>Add product</Link>
   <Link to='/allproduct' className='border bg-blue-700 text-white rounded-sm'>All Product</Link>

    </div>
  )
}

export default sidebar
