import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ChevronUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal/50 border-t border-border mt-20 pt-16 pb-8 z-10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-violet to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Athul M</h2>
        <p className="text-text-secondary mb-8 font-medium">MCA Graduate | Aspiring Software Developer</p>
        
        <div className="flex gap-6 mb-8">
          <a 
            href="https://github.com/athulm08" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-violet hover:shadow-lg hover:shadow-accent-violet/20 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/athul-m-016996365" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-violet hover:shadow-lg hover:shadow-accent-violet/20 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a 
            href="mailto:athulmohanan08@gmail.com" 
            className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-violet hover:shadow-lg hover:shadow-accent-violet/20 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="w-full h-px bg-border max-w-md mx-auto mb-8"></div>
        
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Athul M. All rights reserved.
        </p>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-accent-violet text-white flex items-center justify-center shadow-lg shadow-accent-violet/30 hover:bg-accent-violet-light transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
