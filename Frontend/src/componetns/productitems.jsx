import React, { useContext } from 'react'
import { shopcontext } from '../context/shopcontext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, name, price, image }) => {
  const { curr } = useContext(shopcontext)

  return (
    <Link to={`/product/${id}`} className="block p-4 hover:shadow-lg">
      <div>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </div>
      <p className="mt-2 font-semibold">{name}</p>
      <p className="text-gray-600">{curr}{price}</p>
    </Link>
  )
}

export default ProductItems
