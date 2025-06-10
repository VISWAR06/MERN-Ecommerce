import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-red-700 text-white w-full py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <p className="flex-1 text-center">We ship worldwide</p>
        <a 
          href="tel:+2342234" 
          className="hover:underline text-gray-100 whitespace-nowrap"
        >
          (+12) 7673674676
        </a>
      </div>
    </div>
  );
};

export default Topbar;