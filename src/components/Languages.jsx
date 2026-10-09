import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  { name: 'English', badge: null, badgeType: null },
  { name: 'Malayalam', badge: 'Native', badgeType: 'violet' },
  { name: 'Tamil', badge: 'Intermediate', badgeType: 'blue' }
];

const Languages = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 inline-block relative">
          Languages
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-violet to-accent-blue rounded-full"></span>
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
      >
        {languages.map((lang, index) => (
          <div 
            key={index} 
            className="glass-card w-full md:w-auto px-8 py-5 rounded-xl flex items-center justify-between md:justify-center gap-4 border border-border/50 hover:border-accent-violet/50 transition-colors"
          >
            <span className="text-lg font-medium text-text-primary">{lang.name}</span>
            {lang.badge && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                lang.badgeType === 'violet' 
                  ? 'bg-accent-violet/20 text-accent-violet-light border border-accent-violet/30' 
                  : 'bg-accent-blue/20 text-accent-blue-light border border-accent-blue/30'
              }`}>
                {lang.badge}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Languages;
