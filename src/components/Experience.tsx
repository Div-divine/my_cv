'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="experience">
      <h2 className="h2">{t.experience.title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {t.experience.jobs.map((item, index) => (
          <div key={index} style={{ position: 'relative', paddingLeft: '3rem', borderLeft: '2px solid var(--color-gray-200)' }}>
            <div style={{
              position: 'absolute',
              left: '-9px',
              top: '0',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-gold)',
              border: '4px solid var(--color-bg)',
              boxShadow: '0 0 0 2px var(--color-gold)'
            }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 className="h3" style={{ marginBottom: '0.25rem' }}>{item.role}</h3>
                <p style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.1rem' }}>{item.company}</p>
              </div>
              <span style={{
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                color: 'var(--color-gold)',
                padding: '0.4rem 1.2rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                height: 'fit-content',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                {item.period}
              </span>
            </div>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {item.bullets.map((desc, dIndex) => (
                <li key={dIndex} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{
                    marginTop: '0.5rem',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    flexShrink: 0
                  }}></span>
                  <span style={{ lineHeight: '1.6', opacity: 0.9 }}>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
