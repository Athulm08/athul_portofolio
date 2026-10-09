import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wifi, BarChart3 } from 'lucide-react';
import { certificationsData } from '../data/certificationsData';

const iconMap = { Shield, Wifi, BarChart3 };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 inline-block relative">
            Certifications
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-violet to-accent-blue rounded-full"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData && certificationsData.length > 0 ? (
            certificationsData.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Shield;
              return (
                <motion.div key={index} variants={item} className="glass-card p-6 flex flex-col h-full rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                  
                  <div className="w-14 h-14 rounded-full bg-charcoal-light flex items-center justify-center mb-6 border border-border shadow-lg shadow-accent-violet/10">
                    <Icon className="w-7 h-7 text-accent-violet" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-2">{cert.title}</h3>
                  <p className="text-text-secondary mb-6 flex-grow">{cert.issuer}</p>
                  
                  <div className="mt-auto group/btn relative inline-block">
                    <button 
                      disabled 
                      className="px-5 py-2.5 rounded-lg bg-charcoal-light border border-border text-text-muted text-sm font-medium w-full flex justify-center cursor-not-allowed transition-colors"
                    >
                      View Certificate
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-dark text-white text-xs rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap">
                      Certificate link to be added
                      <svg className="absolute text-slate-dark h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-3 text-center text-text-muted">
              Certifications data not found. Please ensure certificationsData exists.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
