import React from 'react';
import { SOCIAL_LINKS, PERSONAL_DETAILS } from '../constants';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  Instagram,
  Mail
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 mt-12 md:mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand / Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              {PERSONAL_DETAILS.name}
            </h3>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.iconName];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300"
                    aria-label={link.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <a 
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-neon-purple transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              {PERSONAL_DETAILS.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};