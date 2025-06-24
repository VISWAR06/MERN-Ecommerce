import React, { useContext, useEffect, useState } from 'react';
import { shopcontext } from '../context/shopcontext';
import ProductItems from '../componetns/productitems';

const Collections = () => {
  const { products } = useContext(shopcontext);
  const [filterproduct, setFilterproduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    setFilterproduct(products);
  }, [products]);

  const handleCategory = (value) => {
    const updatedCategory = selectedCategory === value ? "" : value;
    setSelectedCategory(updatedCategory);

    if (updatedCategory === "") {
      if (selectedSubcategory) {
        const filtered = products.filter(p => p.subCategory === selectedSubcategory);
        setFilterproduct(filtered);
      } else {
        setFilterproduct(products);
      }
    } else {
      if (selectedSubcategory) {
        const filtered = products.filter(p =>
          p.category === updatedCategory && p.subCategory === selectedSubcategory
        );
        setFilterproduct(filtered);
      } else {
        const filtered = products.filter(p => p.category === updatedCategory);
        setFilterproduct(filtered);
      }
    }
  };

  const handleSubcategory = (value) => {
    const updatedSubcategory = selectedSubcategory === value ? "" : value;
    setSelectedSubcategory(updatedSubcategory);

    if (updatedSubcategory === "") {
      if (selectedCategory) {
        const filtered = products.filter(p => p.category === selectedCategory);
        setFilterproduct(filtered);
      } else {
        setFilterproduct(products);
      }
    } else {
      if (selectedCategory) {
        const filtered = products.filter(p =>
          p.category === selectedCategory && p.subCategory === updatedSubcategory
        );
        setFilterproduct(filtered);
      } else {
        const filtered = products.filter(p => p.subCategory === updatedSubcategory);
        setFilterproduct(filtered);
      }
    }
  };

  return (
    <div className="flex p-4">

     
      <div className="w-1/4 flex flex-col space-y-6">

        
        <div className="border border-black p-4">
          <h1 className="font-semibold mb-2">Category</h1>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategory === "Men"}
                onChange={() => handleCategory("Men")}
              />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategory === "Women"}
                onChange={() => handleCategory("Women")}
              />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategory === "Kids"}
                onChange={() => handleCategory("Kids")}
              />
              <span>Kids</span>
            </label>
          </div>
        </div>

        
        <div className="border border-black p-4">
          <h1 className="font-semibold mb-2">Subcategory</h1>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSubcategory === "Topwear"}
                onChange={() => handleSubcategory("Topwear")}
              />
              <span>Topwear</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSubcategory === "BottomWear"}
                onChange={() => handleSubcategory("BottomWear")}
              />
              <span>BottomWear</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSubcategory === "Winterwear"}
                onChange={() => handleSubcategory("Winterwear")}
              />
              <span>Winterwear</span>
            </label>
          </div>
        </div>
      </div>

     
      <div className="w-3/4 pl-6 flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-xl font-bold">All Products</h1>
          <select className="border border-gray-400 px-2 py-1 rounded">
            <option value="Relevant">Sort by: Relevant</option>
            <option value="High-Low">Sort by: High-Low</option>
            <option value="Low-High">Sort by: Low-High</option>
          </select>
        </div>

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
