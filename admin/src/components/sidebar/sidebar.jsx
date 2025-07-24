import React from 'react'
import {Link} from 'react-router-dom'
const sidebar = () => {
  return (
    <div className=''>
   <Link to='/addproduct'>Add product</Link>
   <Link to='/allproduct'>All Product</Link>

    </div>
  )
}

export default sidebar
