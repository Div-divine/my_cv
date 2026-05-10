'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
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
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
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
      </div>
    </nav>
  );
};

export default Navbar;
