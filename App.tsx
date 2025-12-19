import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Global Smooth Scroll Handler
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if clicked element is an anchor link pointing to an internal ID
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          // Update URL without jumping
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-neon-blue selection:text-slate-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />

      {/* Background Gradient Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-blue/20 rounded-full blur-[120px]" />
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;