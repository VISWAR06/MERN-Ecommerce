import React, { useContext, useEffect, useState } from 'react';
import { shopcontext } from '../context/shopcontext';
import ProductItems from '../componetns/productitems';

const Collections = () => {
  const { products } = useContext(shopcontext);

  const [filterproduct, setFilterproduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [sortOption, setSortOption] = useState("Relevant");

  useEffect(() => {
    setFilterproduct(products);
  }, [products]);

  const applyFilters = (category, subcategory, sortBy) => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (subcategory) {
      filtered = filtered.filter(p => p.subCategory === subcategory);
    }

    if (sortBy === "High-Low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Low-High") {
      filtered.sort((a, b) => a.price - b.price);
    }

    setFilterproduct(filtered);
  };

  const handleCategory = (value) => {
    const updatedCategory = selectedCategory === value ? "" : value;
    setSelectedCategory(updatedCategory);
    applyFilters(updatedCategory, selectedSubcategory, sortOption);
  };

  const handleSubcategory = (value) => {
    const updatedSubcategory = selectedSubcategory === value ? "" : value;
    setSelectedSubcategory(updatedSubcategory);
    applyFilters(selectedCategory, updatedSubcategory, sortOption);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
    applyFilters(selectedCategory, selectedSubcategory, value);
  };

  return (
    <div className="flex p-4">
      
      {/* Sidebar for Category & Subcategory */}
      <div className="w-1/4 flex flex-col space-y-6">
        
        {/* Category Filter */}
        <div className="border border-black p-4">
          <h1 className="font-semibold mb-2">Category</h1>
          <div className="space-y-2">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategory === cat}
                  onChange={() => handleCategory(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className="border border-black p-4">
          <h1 className="font-semibold mb-2">Subcategory</h1>
          <div className="space-y-2">
            {["Topwear", "BottomWear", "Winterwear"].map((sub) => (
              <label key={sub} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSubcategory === sub}
                  onChange={() => handleSubcategory(sub)}
                />
                <span>{sub}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Product Listing Area */}
      <div className="w-3/4 pl-6 flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-xl font-bold">All Products</h1>
          <select
            className="border border-gray-400 px-2 py-1 rounded"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="Relevant">Sort by: Relevant</option>
            <option value="High-Low">Price: High to Low</option>
            <option value="Low-High">Price: Low to High</option>
          </select>
        </div>

        {/* Products Grid */}
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
  );
};

export default Collections;
