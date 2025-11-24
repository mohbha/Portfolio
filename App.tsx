import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ProjectCard } from './components/ProjectCard';
import { Timeline } from './components/Timeline';
import { ChatInterface } from './components/ChatInterface';
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
          <div className="space-y-8">
             <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
                <div>
                   <h2 className="text-3xl font-bold text-white mb-2">Projects Archive</h2>
                   <p className="text-nexus-muted">A collection of experiments, products, and open source contributions.</p>
                </div>
                <div className="font-mono text-xs text-nexus-accent border border-nexus-accent/30 px-3 py-1 rounded-full bg-nexus-accent/5">
                   TOTAL: {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      case 'timeline':
        return <Timeline />;
      case 'chat':
        return <ChatInterface />;
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
