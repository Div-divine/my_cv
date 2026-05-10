import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Marion Poizeau Website',
    link: 'https://www.marionpoizeau.com/',
    image: '/marion.png',
    tags: ['Next.js', 'WordPress', 'SEO', 'Maintenance'],
    description: 'Initially developed with WordPress (2022); fully rebuilt using Next.js in April 2026. I provide ongoing technical maintenance and production updates.'
  },
  {
    title: 'Timeo Coaching Platform',
    link: 'https://www.timeocoaching.com/',
    image: '/timeo.png',
    tags: ['Next.js', 'Prismic CMS', 'GSAP', 'Maintenance'],
    description: 'Built a full-stack coaching platform with dynamic content management. I manage ongoing maintenance and security optimization.'
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="h2">Featured Professional Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {projectsData.map((project, index) => (
          <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '250px', width: '100%' }}>
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="h3" style={{ marginBottom: 0 }}>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gold">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map((tag, tIndex) => (
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
          <strong>Private Flutter Application</strong> — Currently developing a cross-platform mobile application focused on mobile architecture, API integration, state management, and responsive UI systems.
        </p>
      </div>
    </section>
  );
};

export default Projects;
