import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-16 md:pt-0">
      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-neon-blue font-mono mb-6 text-lg tracking-wide"
        >
          Hi there, I am
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight gradient-text hover-lift"
        >
          {PERSONAL_DETAILS.name}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-heading font-bold text-slate-400 mb-12 leading-tight max-w-2xl min-h-[4rem] md:min-h-[5rem]"
        >
          <TypeAnimation
            sequence={[
              'Aspiring Full Stack Developer',
              1000,
              'C++ Programmer',
              1000,
              'Engineering Student',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap gap-5"
        >
          <a 
            href="#projects"
            className="group relative px-8 py-4 bg-neon-blue/10 text-neon-blue border border-neon-blue/50 rounded-lg overflow-hidden font-semibold transition-all hover:bg-neon-blue hover:text-slate-900 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2 hover-lift neon-border"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="#contact"
            className="group px-8 py-4 glass text-white rounded-lg font-semibold hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 border border-slate-700/50 hover:border-neon-purple/50 hover-lift"
          >
            <span>Contact Me</span>
            <Mail className="w-5 h-5 group-hover:text-neon-purple transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};