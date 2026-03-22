import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';
import { Cpu, X, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const getSkillIcon = (skillName: string) => {
    const iconClass = "text-5xl md:text-6xl transition-colors duration-300";
    
    switch(skillName) {
      case 'C':
        return <i className={`devicon-c-plain ${iconClass} group-hover:text-neon-blue`} />;
      case 'C++':
        return <i className={`devicon-cplusplus-plain ${iconClass} group-hover:text-neon-blue`} />;
      case 'HTML':
        return <i className={`devicon-html5-plain ${iconClass} group-hover:text-neon-blue`} />;
      case 'SQL':
        return <Database className={`w-12 h-12 md:w-16 md:h-16 group-hover:text-neon-blue ${iconClass}`} strokeWidth={1.5} />;
      default:
        return <Cpu className={`w-12 h-12 md:w-16 md:h-16 group-hover:text-neon-blue ${iconClass}`} />;
    }
  };

  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-neon-blue/10 rounded-xl">
          <Cpu className="w-6 h-6 text-neon-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Technical Skills</h2>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={skill.name}
            layoutId={`skill-card-${skill.name}`}
            onClick={() => setSelectedSkill(skill)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer w-28 h-28 md:w-32 md:h-32"
          >
            {/* Enhanced Gradient Glow Background */}
            <div className="absolute -inset-0.5 group-hover:-inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl blur opacity-20 group-hover:opacity-75 transition-all duration-300 animate-gradient-x"></div>
            
            {/* Content Container */}
            <div className="relative h-full w-full flex items-center justify-center glass rounded-2xl border border-slate-800/50 group-hover:border-neon-blue/30 transition-all duration-300 text-slate-400 hover-lift">
               {getSkillIcon(skill.name)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] cursor-pointer"
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`skill-card-${selectedSkill.name}`}
                className="w-full max-w-lg glass border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative hover-lift"
              >
                 {/* Enhanced Modal Header Decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient-x" />
                
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-800 rounded-xl text-neon-blue">
                      {/* Use the same icon in modal header, slightly smaller/different if needed, or keeping consistent */}
                      {getSkillIcon(selectedSkill.name)}
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white text-glow-blue drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                      {selectedSkill.name}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {selectedSkill.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};