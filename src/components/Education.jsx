import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { educationData } from '../data/educationData';

const iconMap = { GraduationCap, BookOpen, School };

const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold inline-block"
          >
            Education
            <div className="h-1 w-full bg-gradient-to-r from-accent-violet to-accent-blue mt-2 rounded-full mx-auto md:mx-0"></div>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-violet via-accent-blue to-transparent transform md:-translate-x-1/2 rounded-full hidden sm:block opacity-50"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const IconComponent = iconMap[item.icon] || GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-navy border-4 border-accent-violet items-center justify-center glow-violet z-10 shadow-xl">
                    <IconComponent size={16} className="text-accent-violet-light" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 sm:pl-16 md:pl-0`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl relative group hover:border-accent-violet-light/30 transition-colors duration-300">
                      
                      {/* Mobile Icon */}
                      <div className="sm:hidden absolute -left-3 top-6 w-8 h-8 rounded-full bg-navy border-2 border-accent-violet flex items-center justify-center glow-violet shadow-lg">
                        <IconComponent size={14} className="text-accent-violet-light" />
                      </div>

                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-accent-blue-light text-sm font-semibold tracking-wider">
                          {item.period}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-violet-light transition-colors">
                          {item.degree}
                        </h3>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-text-primary font-medium text-base">
                          {item.institution}
                        </p>
                        {item.board && (
                          <p className="text-text-muted text-sm flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent-blue"></span>
                            {item.board}
                          </p>
                        )}
                        {item.score && (
                          <p className="text-text-secondary text-sm font-medium mt-3 bg-charcoal-light inline-block px-3 py-1 rounded-lg border border-border">
                            {item.score}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
