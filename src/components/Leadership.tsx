'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const Leadership = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="leadership">
      <h2 className="h2">{t.leadership.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {t.leadership.roles.map((item, index) => (
          <div key={index} className="card glass">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="h3" style={{ marginBottom: 0, fontSize: '1.2rem' }}>{item.role}</h3>
              <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.9rem' }}>{item.period}</span>
            </div>
            <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>{item.company}</p>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {item.bullets.map((desc, dIndex) => (
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
