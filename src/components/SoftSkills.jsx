import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, MessageSquare, Brain, Clock } from 'lucide-react';

const skills = [
  { name: 'Leadership & Initiative', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Analytical Thinking', icon: Brain },
  { name: 'Time Management', icon: Clock },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4 inline-block relative">
            Soft Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-violet to-accent-blue rounded-full"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center rounded-2xl group cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-accent-violet/10 flex items-center justify-center mb-4 group-hover:bg-accent-violet/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent-violet" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-text-primary">{skill.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
