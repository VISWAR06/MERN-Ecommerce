import React from 'react';
import exclusive from '../Assets/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="bg-purple-200 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
       
        <div className="flex flex-col text-end space-y-3 md:w-1/2 ">
          <h1 className="text-3xl font-bold">Exclusive Offers</h1>
          <h2 className="text-xl font-semibold">Offers for You</h2>
          <h3 className="text-md">Only on the seller's products</h3>
        </div>

       
        <div className="md:w-1/2 flex justify-start">
          <img
            src={exclusive}
            alt="Exclusive Offer"
            className="w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
