import React from 'react';
import imge from '../assets/hero_image.png';
import hi from '../assets/hand_icon.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="mt-14 bg-red-400 h-1/2 w-full">
      <div className='pt-[240px] pl-[450px]'><h1>Welcome</h1>
      <h2 className='flex '> new arrivals <img src={hi} alt ='hi' className='h-4 mt-1'/></h2>
       <button><Link to='/new'>New Collection's</Link></button> </div>
      
      <img src={imge} alt="img" className="h-1/2 mx-[950px] pb-[350px]" />
    
    </div>
  );
};

export default Home;
