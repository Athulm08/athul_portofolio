import { motion } from 'framer-motion';
import { 
  Code2, FileCode, Terminal, Cpu, Coffee, Palette, 
  Globe, Paintbrush, Braces, Database, HardDrive, 
  Flame, Monitor, GitBranch, Code 
} from 'lucide-react';
import { skillsData } from '../data/skillsData.js';

const iconMap = { 
  Code2, FileCode, Terminal, Cpu, Coffee, Palette, 
  Globe, Paintbrush, Braces, Database, HardDrive, 
  Flame, Monitor, GitBranch, Code 
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="section-padding relative bg-charcoal/20">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-violet to-accent-blue rounded-full"></div>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={sIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-accent-violet/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all cursor-default"
                    >
                      <Icon className="text-accent-violet" size={32} strokeWidth={1.5} />
                      <span className="text-text-secondary font-medium text-center text-sm">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
