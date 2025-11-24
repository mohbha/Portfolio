import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ProjectCard } from './components/ProjectCard';
import { Timeline } from './components/Timeline';
import { ChatInterface } from './components/ChatInterface';
import { Resume } from './components/Resume';
import { PROJECTS } from './data';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setView={setView} />;
      case 'projects':
        return (
          <div className="space-y-12 py-8">
             <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-white tracking-tight">Project Archive</h2>
                <p className="text-ios-subtext max-w-lg mx-auto">
                   A selection of work demonstrating capabilities in Full Stack Development and Infrastructure.
                </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      case 'timeline':
        return <Timeline />;
      case 'resume':
        return (
          <div className="py-8">
            <Resume />
          </div>
        );
      case 'chat':
        return (
           <div className="py-8">
              <div className="text-center mb-8">
                 <h2 className="text-3xl font-bold text-white mb-2">Interactive AI</h2>
                 <p className="text-ios-subtext">Powered by Gemini. Ask about my skills.</p>
              </div>
              <ChatInterface />
           </div>
        );
      default:
        return <Dashboard setView={setView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setView}>
      {renderContent()}
    </Layout>
  );
};

export default App;