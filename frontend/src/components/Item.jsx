import React from 'react'

const Item = (props) => {
  return (
    <div>
      
      <div>
        <img src={props.image} alt='img' />
      </div>
      <div>
        <h3>{props.name}</h3>
        <div>
            <h2>{props.new_price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Item
