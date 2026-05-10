'use client';

import React from 'react';
import { Server, Layout, Shield, Database, Wrench, Smartphone, FileText } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const skillsConfig = [
  { key: 'backend' as const, icon: <Server className="text-gold" /> },
  { key: 'auth' as const, icon: <Shield className="text-gold" /> },
  { key: 'frontend' as const, icon: <Layout className="text-gold" /> },
  { key: 'databases' as const, icon: <Database className="text-gold" /> },
  { key: 'cms' as const, icon: <Wrench className="text-gold" /> },
  { key: 'docs' as const, icon: <FileText className="text-gold" /> },
  { key: 'mobile' as const, icon: <Smartphone className="text-gold" /> }
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills">
      <h2 className="h2">{t.skills.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillsConfig.map((item, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {item.icon}
              <h3 className="h3" style={{ marginBottom: 0 }}>{t.skills.categories[item.key]}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {t.skills.items[item.key].map((skill, sIndex) => (
                <span key={sIndex} style={{
                  backgroundColor: 'var(--color-gray-100)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--color-primary-dark)',
                  fontWeight: 500
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
