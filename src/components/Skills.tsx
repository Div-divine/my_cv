import React from 'react';
import { Server, Layout, Shield, Database, Wrench, Smartphone, FileText } from 'lucide-react';

const skillsData = [
  {
    category: 'Backend Engineering',
    icon: <Server className="text-gold" />,
    skills: ['Symfony (PHP)', 'Node.js', 'Express.js', 'REST API Architecture', 'Business Logic Design', 'Production Debugging', 'Secure Architecture']
  },
  {
    category: 'Authentication & Security',
    icon: <Shield className="text-gold" />,
    skills: ['JWT Authentication', 'Session-based Auth', 'OAuth2 / OIDC', 'RBAC (Role-Based Access Control)', 'SSO Implementation', 'LemonLDAP::NG', 'Secure Token Validation', 'OWASP Standards']
  },
  {
    category: 'Frontend Engineering',
    icon: <Layout className="text-gold" />,
    skills: ['Next.js', 'React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'PrimeFlex', 'GSAP Animations', 'Component-driven Architecture']
  },
  {
    category: 'Databases & DevOps',
    icon: <Database className="text-gold" />,
    skills: ['PostgreSQL', 'MySQL', 'Relational Modeling', 'Query Optimization', 'Docker', 'Git / GitHub Workflows', 'Vercel', 'AWS (EC2, S3)']
  },
  {
    category: 'CMS & Content',
    icon: <Wrench className="text-gold" />,
    skills: ['WordPress', 'Elementor', 'Headless CMS', 'Prismic CMS', 'Custom Theme Development']
  },
  {
    category: 'Documentation',
    icon: <FileText className="text-gold" />,
    skills: ['Swagger / OpenAPI', 'Nelmio API Doc', 'GitBook']
  },
  {
    category: 'Mobile Development',
    icon: <Smartphone className="text-gold" />,
    skills: ['Flutter (Learning)', 'Dart']
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="h2">Core Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillsData.map((item, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {item.icon}
              <h3 className="h3" style={{ marginBottom: 0 }}>{item.category}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {item.skills.map((skill, sIndex) => (
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
