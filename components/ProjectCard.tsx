import React from 'react';
import { Project } from '../types';
import { Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col gap-4">
      {/* Image Container */}
      <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden bg-ios-card relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-2 px-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-ios-blue transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            {project.github && (
              <a href={project.github} className="text-ios-text hover:text-white" title="Source Code">
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="text-ios-text hover:text-white" title="Live Project">
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-base text-ios-subtext leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-ios-subtext/80">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};