'use client';

import React from 'react';
import DownloadButton from './DownloadButton';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="home" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="animate-fade-in" style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '850px' }}>
          <div>
            <h1 className="h1">
              Divine <span className="text-gold">Osuu</span>
            </h1>
            <p className="h3" style={{ marginTop: '0.5rem', color: 'var(--color-gold)', fontWeight: 700 }}>
              {t.hero.role}
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-primary)', marginTop: '0.25rem', opacity: 0.8 }}>
              {t.hero.tagline}
            </p>
          </div>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--color-text)', opacity: 0.8 }}>
            {t.hero.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '1rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} className="text-gold" />
              <span>France</span>
            </div>
            <a href="mailto:divineosuuweb@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} className="text-gold" />
              <span>divineosuuweb@gmail.com</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={20} className="text-gold" />
              <span>+33 (0)7 49 65 06 96</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <DownloadButton />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/Div-divine" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/divine-osuu-36a3a0301" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
