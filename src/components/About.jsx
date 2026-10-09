import { motion } from 'framer-motion';
import { GraduationCap, Heart, Code2, Wrench } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl font-bold text-text-primary mb-2">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-violet to-accent-blue rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                I am an MCA graduate with a Bachelor of Computer Science background and a strong interest in software development. My technical foundation includes programming languages, web technologies, databases, and development tools.
              </p>
              <p>
                Through academic and personal projects, I have explored solutions involving web applications, mobile marketplaces, computer vision, and language technologies. I enjoy solving problems, learning new tools, and developing applications that address real-world needs.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="glass-card p-6 rounded-2xl flex flex-col items-start hover:border-accent-violet/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center text-accent-violet mb-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-1">Education</h3>
                <p className="text-sm text-text-muted">Master of Computer Applications</p>
              </div>

              <div className="glass-card p-6 rounded-2xl flex flex-col items-start hover:border-accent-blue/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-1">Interests</h3>
                <p className="text-sm text-text-muted">Software Dev, Web Dev, Mobile Apps</p>
              </div>

              <div className="glass-card p-6 rounded-2xl flex flex-col items-start hover:border-accent-violet/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center text-accent-violet mb-4">
                  <Code2 size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-1">Languages</h3>
                <p className="text-sm text-text-muted">Python, PHP, C, C++, Java, Dart</p>
              </div>

              <div className="glass-card p-6 rounded-2xl flex flex-col items-start hover:border-accent-blue/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-1">Tools</h3>
                <p className="text-sm text-text-muted">Git & Visual Studio Code</p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
