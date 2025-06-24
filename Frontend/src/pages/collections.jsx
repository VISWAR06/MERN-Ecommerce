import React from 'react'

const Collections = () => {
  return (
    <div className="flex p-4">
      
      {/* Filters Sidebar */}
      <div className="flex flex-col justify-center space-y-6">
        
        {/* Category Section */}
        <div className="min-w-60 border border-black p-4">
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
        <div className="min-w-60 border border-black p-4">
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
<div className='flex h-16 '>
  <h1 className='font-serif bg-red-500 flex justify-center'>All Products</h1>
  <select className='flex justify-end'>
    <option value="Relevant">Sort by: Relevant</option>
    <option value="High-Low">sort by: High-Low</option>
    <option value="Low-High">Sort by: Low-High</option>
  </select>
</div>
    </div>
  )
}

export default Collections
