import React from 'react';
import { EXPERIENCE } from '../data';

export const Timeline: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-12 border-b border-white/10 pb-6">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <p className="text-ios-subtext mt-2">A history of technical roles and responsibilities.</p>
      </div>
      
      <div className="space-y-16">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <span className="font-mono text-sm text-ios-subtext">{exp.period}</span>
            </div>
            
            <div className="text-lg font-medium text-ios-blue mb-4">{exp.role}</div>
            
            <p className="text-ios-text leading-relaxed text-base mb-6">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-ios-card rounded-md text-xs font-medium text-ios-subtext group-hover:text-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};