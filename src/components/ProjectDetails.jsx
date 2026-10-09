import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './icons';

const ProjectDetails = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-navy border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden glass-card z-10"
          >
            <div className="flex justify-between items-center p-4 border-b border-border sticky top-0 bg-navy/90 backdrop-blur-md z-20">
              <h2 className="text-xl font-bold gradient-text truncate pr-8">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-charcoal-light text-text-muted hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-charcoal-light scrollbar-track-transparent">
              {project.image && (
                <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-accent-violet rounded-full"></span>
                    Overview
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.fullDescription || project.shortDescription}
                  </p>
                </section>

                {project.problemStatement && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-accent-blue rounded-full"></span>
                      Problem Statement
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </section>
                )}

                {project.objectives && project.objectives.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-accent-cyan rounded-full"></span>
                      Objectives
                    </h3>
                    <ul className="space-y-2">
                      {project.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <CheckCircle size={20} className="text-accent-violet mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.features && project.features.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-accent-violet rounded-full"></span>
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.results && project.results.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-accent-blue rounded-full"></span>
                      Results & Impact
                    </h3>
                    <p className="text-xs text-text-muted mb-4 italic">
                      Results as reported in project documentation
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="p-4 rounded-xl bg-charcoal border border-border border-l-4 border-l-accent-blue glow-blue">
                          <p className="text-text-primary font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-sm rounded-full bg-accent-violet/10 text-accent-violet-light border border-accent-violet/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
            
            {(project.githubUrl || project.liveUrl) && (
              <div className="p-6 border-t border-border bg-charcoal/50 flex flex-wrap gap-4 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-charcoal hover:bg-charcoal-light text-white transition-colors border border-border hover:border-accent-violet-light/50 group"
                  >
                    <GithubIcon size={20} className="group-hover:text-accent-violet-light transition-colors" />
                    <span>View Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-accent-violet hover:bg-accent-violet-light text-white transition-colors glow-violet"
                  >
                    <ExternalLink size={20} />
                    <span>Visit Live Site</span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
