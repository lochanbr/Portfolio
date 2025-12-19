import React, { useState, FormEvent } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PERSONAL_DETAILS } from '../constants';
import { Mail, Send, Loader2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SectionWrapper id="contact" className="mb-16">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-neon-purple/10 rounded-xl">
          <MessageSquare className="w-6 h-6 text-neon-purple" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Get In Touch</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="prose prose-invert">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm currently looking for new opportunities as a Full Stack Developer. 
              Whether you have a question, a project idea, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
          </div>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-neon-blue/30 transition-colors">
             <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-slate-800 rounded-lg text-neon-blue">
                   <Mail className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-white font-semibold">Email Me</h4>
                   <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-400 hover:text-neon-blue transition-colors">
                      {PERSONAL_DETAILS.email}
                   </a>
                </div>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative group">
           {/* Glow Effect */}
           <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
           
           <form onSubmit={handleSubmit} className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800">
             <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 hover:from-neon-blue/20 hover:to-neon-purple/20 border border-neon-blue/20 hover:border-neon-blue/50 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSuccess ? (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-neon-green"
                    >
                      Message Sent!
                    </motion.span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
             </div>
           </form>
        </div>
      </div>
    </SectionWrapper>
  );
};