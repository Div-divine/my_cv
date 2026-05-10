'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <h2 className="h2">{t.about.title}</h2>
      <div className="card glass">
        <p
          style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ __html: t.about.p1 }}
        />
        <p
          style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}
          dangerouslySetInnerHTML={{ __html: t.about.p2 }}
        />
      </div>
    </section>
  );
};

export default About;
