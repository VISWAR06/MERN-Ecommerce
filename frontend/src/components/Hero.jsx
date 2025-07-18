import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../Assets/Frontend_Assets/hero_image.png';

const Hero = () => {
  return (
    <div className=" border border-gray-200 bg-purple-50 h-[100vh] w-full flex items-center justify-between px-10 text-black">

     
      <div className='flex flex-col gap-6'>
        <h1 className='font-extrabold text-6xl leading-tight'>Latest Arrivals</h1>
        <div className='flex  gap-3 text-2xl font-medium'>
          <Link to='/men' className='hover:underline'><button className='rounded-lg bg-black text-white'>For Men</button></Link>
          <Link to='/men' className='hover:underline'><button className='rounded-lg bg-black  text-white'>For Women</button></Link>
          <Link to='/men' className='hover:underline'><button className='rounded-lg bg-black  text-white'>For kids</button></Link>
          
        </div>
      </div>

     
      <div className='h-full flex items-center justify-end'>
        <img 
          src={hero} 
          alt='Hero' 
          className='h-full object-cover' 
        />
      </div>

    </div>
  );
};

export default Hero;
