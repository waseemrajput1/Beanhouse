import React from 'react';

const About = () => {
  return (
    <section style={{ padding: '120px 80px', background: '#fff', display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200" alt="Coffee Craft" style={{ width: '100%', borderRadius: '2px' }} />
      </div>
      <div style={{ flex: '1.2', minWidth: '400px' }}>
        <h4 style={{ color: '#603601', letterSpacing: '4px', fontWeight: '600', fontSize: '14px' }}>OUR PHILOSOPHY</h4>
        <h2 style={{ fontSize: '48px', color: '#3C2A21', fontFamily: 'Playfair Display', margin: '20px 0' }}>The Pursuit of Perfect Brewing</h2>
        <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
          At Bean House, we believe that exceptional coffee is the result of precision and passion. Our journey begins at the source, partnering with sustainable farms to bring you specialty-grade beans that represent the true character of their origin.
        </p>
        <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8' }}>
          Every roast is a delicate balance of science and art, ensuring each cup offers a clean, complex, and memorable sensory experience. From the high altitudes of Ethiopia to the rich soils of Brazil, we curate only the finest.
        </p>
      </div>
    </section>
  );
};

export default About;