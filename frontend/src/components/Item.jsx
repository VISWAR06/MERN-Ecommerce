import React from 'react'
import {Link} from 'react-router-dom' 
const Item = (props) => {
  return (
    <div>
      
      <div>
        <Link to='/product/${props.id}'><img src={props.image} alt='img' /></Link>
      </div>
      <div>
        <h3>{props.name}</h3>
        <div>
            <h2>${props.new_price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Item
