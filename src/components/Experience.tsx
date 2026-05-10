import React from 'react';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'IF Technologies - France',
    period: 'Jul 2024 - Present',
    description: [
      'Develop and maintain production-grade full stack applications using Symfony, Vue.js, PostgreSQL, Node.js, and Tailwind CSS',
      'Design backend systems including APIs, authentication flows, and database architecture',
      'Implement authentication systems using JWT, RBAC, and LemonLDAP::NG',
      'Create and maintain API documentation using Swagger, Nelmio, and GitBook',
      'Participate in architecture discussions, technical planning, and feature roadmap decisions',
      'Work directly with clients to analyze requirements and define technical solutions'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'PIC DIGITAL - Bidart, France',
    period: 'Apr 2024 - Jun 2024',
    description: [
      'Developed frontend and backend tasks using Next.js and Express.js',
      'Implemented unit testing and CI/CD integration to ensure robust production deployment',
      'Contributed to responsive UI implementation and frontend improvements',
      'Participated in hosting configuration and deployment tasks'
    ]
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Remote | France',
    period: '2022 - Present',
    description: [
      'Marion Poizeau Website: Initially designed with WordPress (2022); fully rebuilt and migrated to Next.js in April 2026 for production scalability',
      'Timeo Coaching Platform: Designed and developed a full stack coaching platform using Next.js, Prismic CMS, GSAP, and Vercel',
      'Provide ongoing maintenance, security updates, and performance optimization for both platforms',
      'Managed deployment workflows, SEO optimization, and production updates'
    ]
  }
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="h2">Professional Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {experienceData.map((item, index) => (
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
              {item.description.map((desc, dIndex) => (
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
