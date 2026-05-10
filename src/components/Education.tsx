import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    title: 'Full Stack Developer - Level 5 Technical Professional (BAC+2)',
    institution: 'GRETA-CFA Aquitaine - Bayonne, France',
    year: '2023 - 2024'
  },
  {
    title: 'Back-End Development with Python, SQL & DevOps',
    institution: 'Nucamp Coding Bootcamp - USA (Remote)',
    year: '2022'
  },
  {
    title: 'Scientific Baccalaureate',
    institution: 'Emmaüs High School - Lomé, Togo',
    year: '2016'
  }
];

const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="h2">Education</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {educationData.map((item, index) => (
          <div key={index} className="card glass" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{
              backgroundColor: 'var(--color-primary)',
              padding: '1rem',
              borderRadius: '1rem',
              color: 'var(--color-gold)'
            }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{item.institution}</p>
              <p style={{ color: 'var(--color-gold)', fontWeight: 700, marginTop: '0.5rem' }}>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
