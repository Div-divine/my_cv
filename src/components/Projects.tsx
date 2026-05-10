'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const projectLinks = [
  { link: 'https://www.marionpoizeau.com/', image: '/marion.png', tags: ['Next.js', 'WordPress', 'SEO', 'Maintenance'] },
  { link: 'https://www.timeocoaching.com/', image: '/timeo.png', tags: ['Next.js', 'Prismic CMS', 'GSAP', 'Maintenance'] },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="projects">
      <h2 className="h2">{t.projects.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {t.projects.items.map((project, index) => (
          <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '250px', width: '100%' }}>
              <Image
                src={projectLinks[index].image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="h3" style={{ marginBottom: 0 }}>{project.title}</h3>
                <a href={projectLinks[index].link} target="_blank" rel="noopener noreferrer" className="text-gold">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {projectLinks[index].tags.map((tag, tIndex) => (
                  <span key={tIndex} style={{
                    fontSize: '0.8rem',
                    border: '1px solid var(--color-gray-200)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    color: 'var(--color-text)',
                    opacity: 0.7
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p className="card glass" style={{ display: 'inline-block', maxWidth: '800px' }}>
          <strong>{t.projects.flutterTitle}</strong> — {t.projects.flutter}
        </p>
      </div>
    </section>
  );
};

export default Projects;
