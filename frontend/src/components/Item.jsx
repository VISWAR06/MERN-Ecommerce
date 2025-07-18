import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-72 p-4 border rounded-lg  ">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image} alt="product" className="w-full h-64 object-cover mb-3" />
      </Link>
      <h3 className="text-lg font-semibold truncate">{props.name}</h3>
      <h2 className="text-black font-bold">${props.new_price}</h2>
    </div>
  );
};

export default Item;
