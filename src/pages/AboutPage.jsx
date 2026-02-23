import React, { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: '#fdfaf7', minHeight: '100vh', paddingTop: '100px' }}>
      <section style={{ padding: '100px 10%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '64px', color: '#3C2A21', fontFamily: 'Playfair Display' }}>The Bean House Story</h1>
        <p style={{ fontSize: '20px', color: '#555', maxWidth: '900px', margin: '30px auto', lineHeight: '1.9' }}>
          Founded on the principle of quality without compromise, Bean House is a sanctuary for coffee enthusiasts. We stand at the intersection of tradition and innovation, where every bean is treated with the respect it deserves. Our roasting process is designed to highlight the unique terroir of each farm, bringing a world of flavor directly to your cup.
        </p>
      </section>

      <section style={{ background: '#3C2A21', color: '#fff', padding: '80px 10%', display: 'flex', gap: '60px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#d4a373', fontSize: '36px' }}>Small Batch, Big Impact</h2>
          <p style={{ opacity: '0.8', lineHeight: '1.8', fontSize: '18px' }}>
            We avoid mass production to focus on excellence. By roasting in small batches, our team can monitor every second of the development phase, ensuring that the natural sugars are caramelized to perfection and the delicate acidity is preserved.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200" alt="Roasting" style={{ width: '100%', borderRadius: '4px' }} />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;