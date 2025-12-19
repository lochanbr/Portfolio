import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
          scrolled || isOpen 
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg shadow-neon-blue/5' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#" 
              className="text-xl font-bold font-heading tracking-wider text-white hover:text-neon-blue transition-colors group"
            >
              LOCHAN<span className="text-neon-blue group-hover:text-neon-purple transition-colors">.</span>DEV
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-300 hover:text-neon-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full opacity-80"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 hover:pl-6 transition-all duration-300 border border-transparent hover:border-slate-700/50"
                  >
                    {link.name}
                    <span className="text-neon-blue opacity-0 group-hover:opacity-100">&rarr;</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};