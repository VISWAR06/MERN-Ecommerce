import React from 'react';
import imge from '../assets/hero_image.png';
import hi from '../assets/hand_icon.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mt-14  h-[800px] text-6xl font-extrabold flex w-full">
      {/* Left Side: Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img src={imge} alt="hero" className="w-[90%] h-[800px] object-contain" />
      </div>

      {/* Right Side: Text */}
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <h1>Welcome</h1>
        <h2 className="flex items-center gap-4">
          new arrivals <img src={hi} alt="hi" className="h-20 mb-2" />
        </h2>
        <button className="bg-purple-600 rounded-2xl text-2xl p-3">
          <Link to="/new">New Collection's</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
