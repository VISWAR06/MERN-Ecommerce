import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../Assets/Frontend_Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-500 h-[100vh] w-full flex items-center justify-between px-10 text-white">

     
      <div className='flex flex-col gap-6'>
        <h1 className='font-extrabold text-6xl leading-tight'>Latest Arrivals</h1>
        <div className='flex  gap-3 text-2xl font-medium'>
          <Link to='/men' className='hover:underline'><button className='rounded-lg bg-black'>For Men</button></Link>
          <Link to='/men' className='hover:underline'><button className='rounded-lg bg-black'>For Women</button></Link>
          <Link to='/men' className='hover:underline'><button className='rounded-lg bg-black'>For kids</button></Link>
          
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
