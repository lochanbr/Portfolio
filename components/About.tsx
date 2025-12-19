import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PERSONAL_DETAILS } from '../constants';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-neon-purple/10 rounded-xl">
          <User className="w-6 h-6 text-neon-purple" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">About Me</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 relative group">
          {/* Corner Decorations - Responsive to Group Hover */}
          <div className="absolute -left-4 -top-4 w-12 h-12 border-t-2 border-l-2 border-neon-purple/30 rounded-tl-lg transition-colors duration-300 group-hover:border-neon-purple" />
          <div className="absolute -right-4 -bottom-4 w-12 h-12 border-b-2 border-r-2 border-neon-blue/30 rounded-br-lg transition-colors duration-300 group-hover:border-neon-blue" />
          
          {/* Gradient Glow Background */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
          
          {/* Main Content Card */}
          <div className="relative bg-slate-900 border border-slate-800 group-hover:border-transparent p-8 md:p-10 rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[1.01]">
            <p className="text-lg text-slate-300 leading-relaxed">
              {PERSONAL_DETAILS.about}
            </p>
          </div>
        </div>
        
        {/* Decorative or additional info */}
        <div className="hidden md:flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 shadow-lg group hover:border-neon-blue/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:scale-[1.02]">
           <div className="text-center">
             <span className="block text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-3">
               Full Stack
             </span>
             <span className="text-slate-400 text-sm tracking-[0.2em] uppercase font-semibold">Focus</span>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};