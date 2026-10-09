import { motion } from 'framer-motion';
import { Download, Mail, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import heroImg from '../assets/hero-illustration.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated gradient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="container mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 bg-glass border border-border px-4 py-2 rounded-full">
            <span className="text-xl">👋</span>
            <span className="text-text-secondary font-medium">Hello, I'm</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-text-primary">
            <span className="gradient-text">Athul M</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-text-secondary mb-6">
            MCA Graduate | Software Developer
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-text-muted text-lg max-w-xl mb-10 leading-relaxed">
            I enjoy building practical software solutions using programming, web technologies, mobile development, and emerging technologies. I am continuously learning and looking for opportunities to contribute to meaningful software projects.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-violet/25 transition-all"
            >
              View My Projects <ChevronRight size={18} />
            </a>
            <a 
              href="/Athul_M_Resume.pdf" 
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-glass border border-border text-text-primary font-medium hover:bg-glass-light transition-all"
            >
              <Download size={18} /> Download Resume
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-glass border border-border text-text-primary font-medium hover:bg-glass-light transition-all"
            >
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-6 items-center">
            <span className="text-text-secondary font-medium">Connect with me:</span>
            <div className="flex gap-4">
              <a href="https://github.com/athulm08" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-glass border border-border text-text-secondary hover:text-white hover:border-accent-violet hover:bg-accent-violet/10 transition-all">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/athul-m-016996365" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-glass border border-border text-text-secondary hover:text-white hover:border-accent-blue hover:bg-accent-blue/10 transition-all">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          className="relative lg:ml-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden glow-violet"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/20 to-transparent z-10 pointer-events-none"></div>
            <img 
              src={heroImg} 
              alt="Developer illustration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
