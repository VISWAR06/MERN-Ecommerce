import React, { useContext } from 'react'
import{Shopcontext} from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
const Product = () => {
  const{all}=useContext(Shopcontext);
  const {ProductId}=useParams()
  const product=all.find((e)=>e.id==Number(productId))
  return (
    <div>
      
    </div>
  )
}

export default Product
