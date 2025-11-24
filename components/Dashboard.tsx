import React from 'react';
import { USER_PROFILE, SKILLS, PROJECTS, SOCIALS, CURRENT_LEARNING } from '../data';
import { Github, Linkedin, Mail, ArrowUpRight, Cpu, Code, Layers, Server } from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  setView: (view: ViewState) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 2);

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'email': return <Mail size={20} />;
      default: return <ArrowUpRight size={20} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:gap-6 min-h-[80vh]">
      
      {/* Hero Card */}
      <div className="col-span-1 md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nexus-accent/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-nexus-accent mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-accent"></span>
            </span>
            {USER_PROFILE.availability}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
            Hello, I'm <span className="text-nexus-accent">{USER_PROFILE.name.split(' ')[0]}</span>.
          </h1>
          <p className="text-lg text-nexus-muted max-w-md leading-relaxed">
            {USER_PROFILE.title}
          </p>
          <p className="mt-4 text-sm text-nexus-text/80 leading-relaxed max-w-sm">
            {USER_PROFILE.bio}
          </p>
        </div>
        
        <div className="flex gap-4 mt-8 z-10">
          <button 
            onClick={() => setView('projects')}
            className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-nexus-accent transition-colors flex items-center gap-2"
          >
            View Work <ArrowUpRight size={16} />
          </button>
          <button 
            onClick={() => setView('chat')}
            className="px-6 py-2 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
          >
            Ask My AI
          </button>
        </div>
      </div>

      {/* Stats / Tech Stack Preview */}
      <div className="col-span-1 md:col-span-1 md:row-span-2 glass-panel rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-nexus-muted mb-2">
          <Cpu size={18} />
          <span className="text-xs font-mono uppercase tracking-widest">Tech Arsenal</span>
        </div>
        <div className="flex flex-wrap gap-2">
           {SKILLS.slice(0, 8).map((skill) => (
             <span key={skill.name} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded text-xs font-mono text-nexus-text hover:border-nexus-accent/50 transition-colors cursor-default">
               {skill.name}
             </span>
           ))}
        </div>
        <div className="mt-auto pt-4 border-t border-white/10">
             <div className="flex justify-between items-end">
                <div>
                   <div className="text-3xl font-bold text-white">{PROJECTS.length}+</div>
                   <div className="text-xs text-nexus-muted">Key Projects</div>
                </div>
                <div className="text-nexus-secondary">
                  <Code size={24} />
                </div>
             </div>
        </div>
      </div>

      {/* Socials Grid */}
      <div className="col-span-1 md:col-span-1 md:row-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-center gap-4">
        {SOCIALS.map((social) => (
          <a 
            key={social.platform} 
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 text-nexus-muted group-hover:text-white transition-colors">
              {getIcon(social.icon)}
              <span className="text-sm font-medium">{social.platform}</span>
            </div>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-nexus-accent" />
          </a>
        ))}
      </div>

       {/* Location / Time */}
      <div className="col-span-1 md:col-span-1 md:row-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-nexus-800 to-nexus-900 border-nexus-accent/20 border">
        <div className="text-xs font-mono text-nexus-accent mb-1">DEPLOYMENT ZONE</div>
        <div className="text-sm text-white font-medium">{USER_PROFILE.location}</div>
        <div className="mt-2 text-2xl font-mono text-white/50">{new Date().getFullYear()}</div>
      </div>

      {/* Featured Projects */}
      <div className="col-span-1 md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-nexus-muted">
            <Layers size={18} />
            <span className="text-xs font-mono uppercase tracking-widest">Recent Work</span>
          </div>
          <button onClick={() => setView('projects')} className="text-xs text-nexus-accent hover:underline">View All</button>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {featuredProjects.map(project => (
            <div key={project.id} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer" onClick={() => project.link && window.open(project.link, '_blank')}>
              <div className="w-16 h-16 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium truncate group-hover:text-nexus-accent transition-colors">{project.title}</h3>
                <p className="text-xs text-nexus-muted truncate">{project.description}</p>
                <div className="flex gap-2 mt-1.5">
                  {project.tags.slice(0, 2).map(t => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-nexus-muted border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-nexus-muted group-hover:text-white group-hover:border-nexus-accent transition-all">
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Focus / Learning */}
      <div className="col-span-1 md:col-span-2 md:row-span-2 glass-panel rounded-2xl overflow-hidden relative group">
         {/* Abstract Background */}
         <div className="absolute inset-0 bg-gradient-to-br from-nexus-900 via-nexus-800 to-black z-0" />
         <div className="absolute right-0 bottom-0 p-12 opacity-10 text-nexus-accent transform translate-x-1/4 translate-y-1/4">
            <Server size={200} />
         </div>
         
         <div className="relative z-10 p-8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <h3 className="text-sm font-mono text-nexus-accent uppercase tracking-wider">Current Focus</h3>
            </div>
            
            <div className="space-y-4 flex-1">
               <p className="text-nexus-text font-medium">
                 Upgrading skills to move from System Ops to DevOps Engineering.
               </p>
               <ul className="space-y-3 mt-4">
                 {CURRENT_LEARNING.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-sm text-nexus-muted">
                     <span className="mt-1.5 w-1 h-1 rounded-full bg-nexus-secondary flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
         </div>
      </div>

    </div>
  );
};