import React from 'react';
import { ViewState } from '../types';
import { LayoutGrid, Briefcase, Clock, MessageSquare, Terminal } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const navItems: { id: ViewState; icon: React.ReactNode; label: string }[] = [
    { id: 'dashboard', icon: <LayoutGrid size={20} />, label: 'Dashboard' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { id: 'timeline', icon: <Clock size={20} />, label: 'Journey' },
    { id: 'chat', icon: <MessageSquare size={20} />, label: 'Oracle' },
  ];

  return (
    <div className="min-h-screen bg-nexus-900 text-nexus-text selection:bg-nexus-accent selection:text-black flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-20 lg:w-64 border-r border-white/10 glass-panel flex flex-col justify-between z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-nexus-accent rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            <Terminal size={18} className="text-black" />
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter hidden lg:block">NEXUS</span>
        </div>

        <div className="flex-1 flex flex-row md:flex-col gap-2 px-2 md:px-4 py-4 overflow-x-auto md:overflow-visible">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
                ${currentView === item.id 
                  ? 'bg-white/10 text-nexus-accent shadow-[0_0_10px_rgba(0,240,255,0.1)] border border-white/5' 
                  : 'hover:bg-white/5 text-nexus-muted hover:text-white'
                }`}
            >
              <div className={`${currentView === item.id ? 'animate-pulse-slow' : ''}`}>
                {item.icon}
              </div>
              <span className="hidden lg:block font-medium tracking-wide text-sm">{item.label}</span>
              {currentView === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-nexus-accent hidden lg:block shadow-[0_0_5px_#00f0ff]" />
              )}
            </button>
          ))}
        </div>

        <div className="p-6 hidden lg:block">
          <div className="text-xs text-nexus-muted font-mono border-t border-white/10 pt-4">
            STATUS: <span className="text-green-500">ONLINE</span><br/>
            VER: 2.5.0
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto h-screen scroll-smooth">
        {/* Background Grid FX */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-nexus-900 pointer-events-none z-0" />
        
        <div className="relative z-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
};
