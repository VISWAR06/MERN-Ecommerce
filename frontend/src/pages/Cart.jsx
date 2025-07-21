import React, { useState } from 'react';
import Display from '../components/Display';


const sampleProduct = {
  id: 1,
  name: 'Sample Product',
  image: sampleImage,
  new_price: 299,
};

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Shop</h1>

      <Display product={sampleProduct} onAddToCart={handleAddToCart} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Cart ({cart.length})</h2>
        {cart.map((item, index) => (
          <p key={index}>{item.name} - ${item.new_price}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
