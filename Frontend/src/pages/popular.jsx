import React from 'react';
import popularr from '../assets/popular'
const Popular = () => {
  
  return (
    <>
     <div className="text-center">
      <div className="inline-block">
        <h3 className='text-2xl font-bold'>Popular Items</h3>
        <hr className='border-2 border-black mt-2' /> 
      </div>
    </div>
    <div className='flex justify-center gap-4 h-64 py-4'>
    {popularr.map(item=>(
      <div key={item.id } className='text-center'>
        <img src={item.image} alt={item.name} className='h-full'/>
        <h4 className=''>{item.name}</h4>
        </div>
    ))}

    </div>
    </>
   
  );
};

export default Popular;