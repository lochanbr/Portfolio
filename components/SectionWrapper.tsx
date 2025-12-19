import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`py-12 md:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};