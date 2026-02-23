import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#3C2A21', color: 'white', padding: '50px 80px', textAlign: 'center' }}>
      <h2 style={{ letterSpacing: '2px' }}>BEAИ HOUSE</h2>
      <p style={{ opacity: '0.6', fontSize: '14px', margin: '20px 0' }}>
        © 2026 Bean House. A project by <strong>Techfu</strong>. All Rights Reserved.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;