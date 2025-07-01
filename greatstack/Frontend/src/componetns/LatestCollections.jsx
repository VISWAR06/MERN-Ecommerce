import React, { useContext, useEffect, useState } from 'react';
import { shopcontext } from '../context/shopcontext';
import ProductItems from './productitems';

const LatestCollections = () => {
  const { products } = useContext(shopcontext);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatest(products.slice(0, 12));
    }
  }, []); 

  return (
    <div>
      <div>
        <h1 className='flex justify-center font-serif text-3xl'>
          Latest <span className='ml-2'>collections</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {latest.map((item, index) => (
          <ProductItems
            key={index}
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

export default LatestCollections;
