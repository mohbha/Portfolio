import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-panel rounded-xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 border border-white/5 hover:border-nexus-accent/30 group">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-nexus-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-nexus-accent text-black text-[10px] font-bold uppercase tracking-wider rounded-sm">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-nexus-accent transition-colors">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="text-nexus-muted hover:text-white transition-colors" title="View Code">
                <Github size={18} />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="text-nexus-muted hover:text-white transition-colors" title="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-nexus-muted text-sm leading-relaxed mb-4 h-12 overflow-hidden text-ellipsis line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-nexus-text/70 border border-white/5 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
