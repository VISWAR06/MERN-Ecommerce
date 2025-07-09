import React from 'react'
import {Link} from 'react-router-dom'
const sidebar = () => {
  return (
    <div>
   <Link to='/addproduct'>Add product</Link>
   <div><Link to='/allproduct'>All Product</Link></div>

    </div>
  )
}

export default sidebar
