import React, { useState } from 'react';
import Display from '../components/Display';

const App = () => {
  const [cart, setCart] = useState([]);

  const product = {
    id: 1,
    name: 'Sample Product',
    image: sampleImage,
    new_price: 199,
  };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">E-Commerce Page</h1>
      <Display product={product} onAddToCart={handleAddToCart} />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">🛒 Cart Items ({cart.length})</h2>
        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.new_price}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
