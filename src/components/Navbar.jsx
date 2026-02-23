import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '25px 80px', 
      position: 'absolute', 
      width: '100%', 
      top: 0, 
      zIndex: 100, 
      boxSizing: 'border-box'
    }}>
      {/* Brand Logo */}
      <Link to="/" style={{ color: 'white', fontSize: '24px', fontWeight: '800', textDecoration: 'none', letterSpacing: '3px' }}>
        BEAИ HOUSE
      </Link>
      
      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>
            HOME
        </Link>
        
        {/* Menu Link (Pointing to Home or specific route) */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>
            MENU
        </Link>

        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>
            OUR STORY
        </Link>
        
        {/* Shop Now Action Button */}
        <button style={{
          background: '#603601', 
          color: 'white', 
          border: 'none', 
          padding: '10px 25px',
          borderRadius: '2px', 
          cursor: 'pointer', 
          fontWeight: '600', 
          fontSize: '12px', 
          letterSpacing: '1px'
        }}>
            SHOP NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;