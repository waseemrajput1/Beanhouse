import React from 'react';

const Team = () => {
  const experts = [
    { title: "Sourcing Director", detail: "Global partnerships for specialty-grade beans." },
    { title: "Master Roaster", detail: "Expert in roast profiling and flavor development." },
    { title: "Quality Control", detail: "Ensuring consistency across every single batch." },
    { title: "Beverage Program", detail: "Designing world-class sensory experiences." }
  ];

  return (
    <section style={{ padding: '100px 80px', background: '#FDF1E6', textAlign: 'center' }}>
      <h4 style={{ color: '#603601', letterSpacing: '4px', fontSize: '14px' }}>THE CRAFTSMEN</h4>
      <h2 style={{ fontSize: '42px', color: '#3C2A21', fontFamily: 'Playfair Display', margin: '20px 0 60px' }}>Our Team of Experts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
        {experts.map((exp, i) => (
          <div key={i} style={{ background: '#fff', padding: '50px 30px', borderTop: '4px solid #3C2A21' }}>
            <h3 style={{ fontSize: '18px', color: '#3C2A21', textTransform: 'uppercase', marginBottom: '15px' }}>{exp.title}</h3>
            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>{exp.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;