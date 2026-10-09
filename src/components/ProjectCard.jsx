import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from './icons';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden group flex flex-col h-full hover:border-accent-violet-light/50 transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image || 'https://via.placeholder.com/400x250'}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-4 line-clamp-3 text-sm">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies?.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs rounded-full bg-accent-violet/10 text-accent-violet-light border border-accent-violet/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 4 && (
            <span className="px-2.5 py-1 text-xs rounded-full bg-charcoal-light text-text-muted">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-accent-violet hover:bg-accent-violet-light text-white transition-colors text-sm font-medium"
          >
            <Info size={16} />
            Details
          </button>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-charcoal hover:bg-charcoal-light text-text-secondary hover:text-white transition-colors border border-border"
              aria-label="GitHub Repository"
            >
              <GithubIcon size={20} />
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-charcoal hover:bg-charcoal-light text-text-secondary hover:text-white transition-colors border border-border"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
