import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div style={{ backgroundColor: 'white' }}>
        <About />
        <Skills />
      </div>
      <Experience />
      <Leadership />
      <div style={{ backgroundColor: 'white' }}>
        <Projects />
        <Education />
      </div>
      
      <footer style={{ 
        backgroundColor: 'var(--color-primary-dark)', 
        color: 'white', 
        padding: '4rem 2rem', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Divine <span style={{ color: 'var(--color-gold)' }}>Osuu</span>
          </h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Full Stack Developer</p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', opacity: 0.5, fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Divine Osuu. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
