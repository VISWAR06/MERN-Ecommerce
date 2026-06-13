import React, { useContext } from 'react'
import { shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import Display from '../components/Display';
import Related from '../components/Related';

const Product = () => {
    const {all}=useContext(shopcontext);
    const {productId}=useParams();
    const products=all.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Display product={products}/>
      <Related/>
    </div>
  )
}

export default Product
