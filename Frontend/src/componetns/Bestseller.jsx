import React, { useContext, useEffect, useState } from 'react';
import { shopcontext } from '../context/shopcontext';
import ProductItems from './productitems';

const Bestseller = () => {
  const [bestseller, setBestseller] = useState([]);
  const { products } = useContext(shopcontext);

  useEffect(() => {
    const bstp = products.filter((item)=>(item.bestseller));
    setBestseller(bstp.slice(0,4))

  }, [products]);

  return (
    <div>
      <div>
        <h1>Best <span>Sellers</span></h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {bestseller.map((item, index) => (
          <ProductItems
            key={item._id || index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
