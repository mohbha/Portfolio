import React from 'react';
import { USER_PROFILE, SKILLS, PROJECTS, SOCIALS, CURRENT_LEARNING } from '../data';
import { Github, Linkedin, Mail, ArrowUpRight, ChevronRight, Server, Terminal } from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  setView: (view: ViewState) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 2);

  return (
    <div className="space-y-12">
      
      {/* Hero Header */}
      <div className="text-center py-10 md:py-20 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient">
          Engineer.<br/>Builder.
        </h1>
        <p className="text-xl md:text-2xl text-ios-subtext max-w-2xl mx-auto leading-relaxed font-medium">
          {USER_PROFILE.title}. <br/>
          <span className="text-ios-text">Specializing in Infrastructure & Cloud Architecture.</span>
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile / Bio Card */}
        <div className="md:col-span-2 bg-ios-card rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-ios-cardHover transition-colors duration-300">
          <div>
            <div className="text-xs font-semibold text-ios-blue uppercase tracking-wide mb-2">About</div>
            <p className="text-lg md:text-xl text-ios-text leading-relaxed font-medium">
              Deployed at <span className="text-white">PSB Bank</span> as a Technical Specialist. 
              Currently managing enterprise Exchange environments while mastering AWS and DevOps methodologies.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
             <button onClick={() => setView('projects')} className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
               View Projects
             </button>
             <button onClick={() => setView('timeline')} className="text-ios-blue px-5 py-2.5 rounded-full text-sm font-medium hover:bg-ios-blue/10 transition-colors">
               My Journey
             </button>
          </div>
        </div>

        {/* Socials / Contact */}
        <div className="md:col-span-1 bg-ios-card rounded-3xl p-8 flex flex-col justify-center gap-6">
           <div className="text-xs font-semibold text-ios-subtext uppercase tracking-wide">Connect</div>
           <div className="space-y-4">
             {SOCIALS.map((social) => (
               <a 
                 key={social.platform}
                 href={social.url}
                 target="_blank"
                 rel="noreferrer"
                 className="flex items-center justify-between group cursor-pointer"
               >
                 <span className="text-lg font-medium text-ios-text group-hover:text-ios-blue transition-colors">{social.platform}</span>
                 <ArrowUpRight className="text-ios-subtext group-hover:text-ios-blue transition-colors" size={18} />
               </a>
             ))}
           </div>
        </div>

        {/* Tech Stack - Clean List */}
        <div className="md:col-span-1 bg-ios-card rounded-3xl p-8 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
             <Terminal size={20} className="text-ios-subtext" />
             <span className="text-xs font-semibold text-ios-subtext uppercase tracking-wide">Stack</span>
          </div>
          <div className="flex flex-wrap gap-2 content-start">
            {SKILLS.map((skill) => (
              <span key={skill.name} className="bg-white/10 text-ios-text px-3 py-1.5 rounded-lg text-xs font-medium">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Projects Preview */}
        <div className="md:col-span-2 bg-ios-card rounded-3xl p-8 overflow-hidden relative group cursor-pointer" onClick={() => setView('projects')}>
           <div className="flex justify-between items-start mb-6 z-10 relative">
              <div>
                <div className="text-xs font-semibold text-ios-subtext uppercase tracking-wide mb-1">Selected Work</div>
                <h3 className="text-2xl font-bold text-white">Project Showcase</h3>
              </div>
              <ChevronRight className="text-ios-subtext group-hover:text-white transition-colors" />
           </div>
           
           <div className="grid grid-cols-2 gap-4 mt-4">
             {featuredProjects.map(p => (
               <div key={p.id} className="bg-black/20 rounded-xl p-4 hover:bg-black/40 transition-colors">
                  <div className="aspect-video w-full rounded-lg overflow-hidden mb-3 bg-gray-800">
                     <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="font-medium text-sm text-white">{p.title}</div>
                  <div className="text-xs text-ios-subtext truncate">{p.description}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Current Learning */}
        <div className="md:col-span-3 bg-gradient-to-br from-ios-card to-[#101010] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
           <div className="space-y-2">
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-xs font-semibold text-ios-subtext uppercase tracking-wide">Focus</span>
             </div>
             <h3 className="text-2xl font-bold text-white">Transitioning to DevOps</h3>
             <p className="text-ios-subtext max-w-lg">
               Actively expanding knowledge in cloud infrastructure and automation.
             </p>
           </div>
           
           <div className="flex flex-wrap gap-3">
             {CURRENT_LEARNING.map((item, idx) => (
               <div key={idx} className="border border-white/10 px-4 py-2 rounded-full text-sm text-ios-text bg-white/5">
                 {item}
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};