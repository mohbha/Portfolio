import React from 'react';
import { EXPERIENCE } from '../data';
import { Calendar, Briefcase } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        <span className="text-nexus-accent">/</span> Professional Journey
      </h2>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-nexus-accent/50 to-transparent transform md:-translate-x-1/2 ml-6 md:ml-0" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-nexus-900 border-2 border-nexus-accent rounded-full transform -translate-x-1/2 translate-y-6 z-10 shadow-[0_0_10px_#00f0ff]" />

              {/* Content Card */}
              <div className="md:w-1/2 ml-12 md:ml-0">
                <div className={`glass-panel p-6 rounded-xl border-l-2 ${index % 2 === 0 ? 'md:border-l-0 md:border-r-2 border-nexus-accent' : 'border-nexus-accent'} hover:bg-white/5 transition-colors`}>
                  <div className="flex items-center gap-2 text-nexus-accent text-xs font-mono mb-2">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-nexus-muted text-sm mb-4">
                    <Briefcase size={14} />
                    {exp.company}
                  </div>
                  <p className="text-nexus-text/80 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-nexus-800 rounded text-[10px] uppercase tracking-wider text-nexus-muted font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty Space for alignment */}
              <div className="md:w-1/2 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
