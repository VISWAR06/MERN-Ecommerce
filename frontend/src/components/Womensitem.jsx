import React from 'react';
import data_product from '../Assets/Frontend_Assets/data';
import Item from './Item';

const Womensitem = () => {
  return (
    <div className=" border border-gray-700 bg-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">POPULAR IN WOMENS</h1>

     
      <div className="flex justify-center">
       
        <div className="grid grid-cols-3 gap-6">
          {data_product.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womensitem;
