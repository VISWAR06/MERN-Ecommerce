import React, { useState } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const [cartCount, setCartCount] = useState(0); 

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      borderBottom: '1px solid #ccc'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
        Outfitz
      </div>

      <div style={{ flexGrow: 1, textAlign: 'center', fontSize: '20px' }}>
        Header
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '24px' }}>
          <FiSearch />
        </button>

        <button style={{ position: 'relative', cursor: 'pointer', background: 'none', border: 'none', fontSize: '24px' }}>
          <FiShoppingCart />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
              lineHeight: 1,
              minWidth: '18px',
              textAlign: 'center',
            }}>
              {cartCount}
            </span>
          )}
        </button>

        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          style={{ borderRadius: '50%', width: 32, height: 32, objectFit: 'cover', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Header;
