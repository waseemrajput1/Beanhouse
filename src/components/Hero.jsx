import React from 'react';

const Hero = () => {
  return (
    <section style={{
      height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920")',
      backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center'
    }}>
      <div className="animate-fade">
        <h4 style={{ letterSpacing: '6px', fontSize: '14px', marginBottom: '20px' }}>ARTISAN ROASTERS</h4>
        <h1 style={{ fontSize: '80px', fontFamily: 'Playfair Display', margin: '0' }}>BEAИ HOUSE</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '25px auto', opacity: '0.8', lineHeight: '1.6' }}>
          Meticulously sourced, small-batch roasted, and delivered with a commitment to exceptional flavor profiles.
        </p>
        <button style={{
          padding: '15px 40px', background: 'transparent', color: 'white',
          border: '1px solid white', cursor: 'pointer', fontSize: '13px', letterSpacing: '2px'
        }}>VIEW COLLECTION</button>
      </div>
    </section>
  );
};

export default Hero;