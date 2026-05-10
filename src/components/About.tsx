import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="h2">Professional Profile</h2>
      <div className="card glass">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Full stack developer with professional software development experience and strong production experience across backend systems, frontend architecture, authentication, APIs, and deployment workflows.
          Experienced in designing and maintaining scalable applications using <strong>Symfony, Node.js, Vue.js, Next.js, and PostgreSQL</strong>.
          Comfortable working across the complete software lifecycle including architecture, backend logic, security, deployment, and production maintenance.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
          Beyond software engineering, I bring several years of leadership, operational management, and business responsibility from entrepreneurship roles.
          This background strengthened my <strong>problem-solving, ownership, and decision-making abilities</strong> in professional environments.
          Currently expanding into cross-platform mobile development with <strong>Flutter</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
