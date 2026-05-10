import React from 'react';

const leadershipData = [
  {
    role: 'Manager',
    company: 'BIATA COMPANIES - Lagos, Nigeria',
    period: '2018 - 2022',
    description: [
      'Managed company operations and supervised multidisciplinary teams',
      'Oversaw technical support services and operational workflows',
      'Coordinated equipment management and logistics',
      'Developed strong leadership, communication, and problem-solving skills'
    ]
  },
  {
    role: 'Team Leader',
    company: 'BIATA Ayo Ventures - Lagos, Nigeria',
    period: '2016 - 2019',
    description: [
      'Managed technical support operations and company equipment',
      'Supervised operational teams and workflow execution',
      'Maintained high operational standards and client satisfaction'
    ]
  },
  {
    role: 'Business Owner',
    company: 'Maggy-nificent Enterprise',
    period: '2020 - Present',
    description: [
      'Managed business operations, logistics, and financial activities',
      'Oversaw accounting, payments, and supplier coordination',
      'Handled operational decision-making and business administration'
    ]
  }
];

const Leadership = () => {
  return (
    <section className="section" id="leadership">
      <h2 className="h2">Leadership & Business Experience</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {leadershipData.map((item, index) => (
          <div key={index} className="card glass">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="h3" style={{ marginBottom: 0, fontSize: '1.2rem' }}>{item.role}</h3>
              <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.9rem' }}>{item.period}</span>
            </div>
            <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>{item.company}</p>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {item.description.map((desc, dIndex) => (
                <li key={dIndex} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.95rem', opacity: 0.8 }}>
                  <span style={{ color: 'var(--color-gold)' }}>•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
