import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import { FolderGit2, ExternalLink, Code } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-neon-purple/10 rounded-xl">
          <FolderGit2 className="w-6 h-6 text-neon-purple" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative h-full"
          >
            {/* Tooltip for Desktop */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 w-72 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden md:block">
               <div className="relative bg-slate-800/95 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                 <p className="text-sm text-slate-200 leading-relaxed font-medium">
                   {project.description}
                 </p>
                 {/* Tooltip Arrow */}
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800/95 border-b border-r border-slate-700 transform rotate-45"></div>
               </div>
            </div>

            <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-purple/50 via-neon-blue/50 to-neon-pink/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 animate-gradient-x" />
            
            <div className="relative h-full glass border border-slate-800/50 rounded-2xl p-8 md:p-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-neon-blue/30 flex flex-col z-10 hover-lift">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors">
                  <Code className="w-6 h-6 text-neon-blue" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow-blue transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-3 py-1.5 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};