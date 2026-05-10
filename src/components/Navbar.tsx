'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.leadership, href: '#leadership' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.education, href: '#education' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
      backgroundColor: isScrolled ? 'rgba(40, 85, 94, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: isScrolled ? 'var(--color-white)' : 'var(--color-primary-dark)'
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-1px' }}>
        DIVINE<span style={{ color: 'var(--color-gold)' }}>OSUU</span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontWeight: 600,
              fontSize: '0.9rem',
              color: isScrolled ? 'var(--color-white)' : 'inherit',
              opacity: 0.8
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            {link.name}
          </a>
        ))}

        <div style={{
          display: 'flex',
          borderRadius: '9999px',
          overflow: 'hidden',
          border: `1px solid ${isScrolled ? 'rgba(255,255,255,0.3)' : 'var(--color-gray-200)'}`,
          fontSize: '0.8rem',
          fontWeight: 700,
          cursor: 'pointer',
        }}>
          <button
            onClick={() => setLang('fr')}
            style={{
              padding: '0.35rem 0.75rem',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: lang === 'fr'
                ? 'var(--color-gold)'
                : 'transparent',
              color: lang === 'fr'
                ? 'var(--color-primary-dark)'
                : isScrolled ? 'var(--color-white)' : 'var(--color-primary-dark)',
              fontWeight: 700,
              fontSize: '0.8rem',
              transition: 'all 0.25s ease',
            }}
          >
            FR
          </button>
          <button
            onClick={() => setLang('en')}
            style={{
              padding: '0.35rem 0.75rem',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: lang === 'en'
                ? 'var(--color-gold)'
                : 'transparent',
              color: lang === 'en'
                ? 'var(--color-primary-dark)'
                : isScrolled ? 'var(--color-white)' : 'var(--color-primary-dark)',
              fontWeight: 700,
              fontSize: '0.8rem',
              transition: 'all 0.25s ease',
            }}
          >
            ENG
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
