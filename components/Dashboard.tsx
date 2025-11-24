import React from 'react';
import { USER_PROFILE, SKILLS, PROJECTS, SOCIALS, CURRENT_LEARNING, CERTIFICATIONS } from '../data';
import { ArrowUpRight, ChevronRight, Terminal, Award, CheckCircle2 } from 'lucide-react';
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
        <div className="md:col-span-2 bg-ios-card rounded-3xl p-6 md:p-8 flex flex-col-reverse md:flex-row gap-8 items-center justify-between hover:bg-ios-cardHover transition-colors duration-300">
          <div className="flex-1 flex flex-col justify-between h-full items-center md:items-start text-center md:text-left">
            <div>
              <div className="text-xs font-semibold text-ios-blue uppercase tracking-wide mb-2">About</div>
              <p className="text-lg text-ios-text leading-relaxed font-medium">
                Deployed at <span className="text-white">PSB Bank</span> as a Technical Specialist. 
                Currently managing enterprise Exchange environments while mastering AWS and DevOps methodologies.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
               <button onClick={() => setView('projects')} className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                 View Projects
               </button>
               <button onClick={() => setView('timeline')} className="text-ios-blue px-6 py-2.5 rounded-full text-sm font-medium hover:bg-ios-blue/10 transition-colors">
                 My Journey
               </button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full md:rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl shrink-0">
               <img 
                 src={USER_PROFILE.avatarUrl} 
                 alt={USER_PROFILE.name} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 onError={(e) => {
                   // Fallback to initials if image fails
                   (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Mohan+Jha&background=random&color=fff&background=333';
                 }}
               />
            </div>
          </div>
        </div>

        {/* Socials & Resume */}
        <div className="md:col-span-1 bg-ios-card rounded-3xl p-8 flex flex-col justify-between">
           <div>
             <div className="text-xs font-semibold text-ios-subtext uppercase tracking-wide mb-4">Connect</div>
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
           
           <div className="mt-8">
              <button 
                onClick={() => setView('resume')}
                className="w-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white py-3 rounded-xl font-semibold text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                 View Digital Resume
              </button>
           </div>
        </div>

        {/* Certification Wallet - NEW */}
        <div className="md:col-span-1 bg-gradient-to-br from-[#FF9900] to-[#1a1a1a] rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-32 bg-black/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                 <Award className="text-white" size={24} />
              </div>
              <span className="text-xs font-bold text-white/90 uppercase tracking-wide">Certified</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">AWS Academy</h3>
            <div className="text-white/80 font-medium text-sm">Graduate & Architect</div>
          </div>

          <div className="relative z-10 mt-6 space-y-3">
            {CERTIFICATIONS.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="block bg-black/20 hover:bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/10 transition-colors">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#FF9900]" />
                  <span className="text-sm font-semibold text-white truncate">{cert.name}</span>
                </div>
              </a>
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
               <div key={p.id} className="bg-black/20 rounded-xl p-4 hover:bg-black/40 transition-colors border border-white/5">
                  <div className="aspect-video w-full rounded-lg overflow-hidden mb-3 bg-gray-800 relative">
                     <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="font-medium text-sm text-white truncate">{p.title}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Current Learning */}
        <div className="md:col-span-2 bg-gradient-to-br from-ios-card to-[#101010] rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-white/5">
           <div className="space-y-2 mb-6">
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-xs font-semibold text-ios-subtext uppercase tracking-wide">Focus</span>
             </div>
             <h3 className="text-2xl font-bold text-white">Transitioning to DevOps</h3>
             <p className="text-ios-subtext">
               Actively expanding knowledge in cloud infrastructure and automation.
             </p>
           </div>
           
           <div className="flex flex-wrap gap-3">
             {CURRENT_LEARNING.map((item, idx) => (
               <div key={idx} className="border border-white/10 px-4 py-2 rounded-full text-sm text-ios-text bg-white/5 backdrop-blur-sm">
                 {item}
               </div>
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
              <span key={skill.name} className="bg-white/10 text-ios-text px-3 py-1.5 rounded-lg text-xs font-medium border border-white/5 hover:bg-white/20 transition-colors cursor-default">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};