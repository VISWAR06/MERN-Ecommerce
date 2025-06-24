import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../context/shopcontext'
import ProductItems from '../componetns/productitems'

const Collections = () => {
  const { products } = useContext(shopcontext)
  const [filterproduct, setFilterproduct] = useState([])

  useEffect(() => {
    setFilterproduct(products)
  }, [products])

  return (
    <div className="flex p-4">

      {/* Left Side: Filters */}
      <div className="w-1/4 flex flex-col space-y-6">
        
        {/* Category Section */}
        <div className="border border-black p-4">
          <h1 className="font-semibold mb-2">Category</h1>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Men" />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Women" />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Kids" />
              <span>Kids</span>
            </label>
          </div>
        </div>

        {/* Subcategory Section */}
        <div className="border border-black p-4">
          <h1 className="font-semibold mb-2">Subcategory</h1>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Topwear" />
              <span>TopWear</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="BottomWear" />
              <span>BottomWear</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Winterwear" />
              <span>Winterwear</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Side: Products */}
      <div className="w-3/4 pl-6 flex flex-col space-y-4">

        {/* Header with Sorting */}
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-xl font-bold">All Products</h1>
          <select className="border border-gray-400 px-2 py-1 rounded">
            <option value="Relevant">Sort by: Relevant</option>
            <option value="High-Low">Sort by: High-Low</option>
            <option value="Low-High">Sort by: Low-High</option>
          </select>
        </div>

        {/* Product Items */}
        <div className="grid grid-cols-3 gap-4">
          {filterproduct.map((item, index) => (
            <ProductItems 
              key={item._id || index} 
              name={item.name} 
              id={item._id} 
              image={item.image} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections
