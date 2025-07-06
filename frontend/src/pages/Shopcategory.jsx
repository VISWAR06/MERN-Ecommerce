import React ,{useContext}from 'react'
import Footer from '../components/Footer'
import Item from '../components/Item'
import { shopcontext } from '../context/Shopcontext'
const Shopcategory = (props) => {
  const {all}=useContext(shopcontext)
  return (
    <div>

      <img src={props.banner} alt='image' />
      <div><p>showing 1-12 out of 36 products</p></div>
      <div>
       {all.map((item,i)=>{
        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        }
        else return null;
       })}
      </div>
        <Footer/>
    </div>
  )
}

export default Shopcategory
