import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { EDUCATION_DATA } from '../constants';
import { MapPin, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-neon-green/10 rounded-xl">
          <GraduationCap className="w-6 h-6 text-neon-green" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Education</h2>
      </div>

      <div className="space-y-8">
        {EDUCATION_DATA.map((item, index) => (
          <div 
            key={index}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-xl p-8 md:p-10 hover:border-neon-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/5"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-neon-green bg-neon-green/10 rounded-full mb-3">
                  {item.type.toUpperCase()}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {item.institution}
                </h3>
              </div>
              
              <a 
                href={item.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors text-sm font-medium bg-slate-800/50 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-neon-blue/50 w-fit shrink-0"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Map</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};