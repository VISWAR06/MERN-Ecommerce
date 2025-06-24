import React from 'react'

const collections = () => {
  return (
    <div>
      <div className='min-w-60 border-black'>
        <p>filters</p>
      </div>
      <div>
        <p> <input type='checkbox' value={'Men'}/> Men</p>
       
      </div>
      <div>
        <p> <input type='checkbox' value={'Women'}/>Women</p>
       
      </div>
      <div>
        <p> <input type='checkbox' value={'Kids'}/> Kids</p>
       
      </div>
      
    </div>
  )
}

export default collections
