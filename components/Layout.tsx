import React from 'react';
import { ViewState } from '../types';
import { LayoutGrid, Layers, Clock, MessageSquare, Menu, X, FileText } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: ViewState; label: string }[] = [
    { id: 'dashboard', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Journey' },
    { id: 'resume', label: 'Resume' },
    { id: 'chat', label: 'Ask AI' },
  ];

  const handleNavClick = (id: ViewState) => {
    setView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ios-bg text-ios-text flex flex-col">
      {/* Sticky Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-14">
        <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
          <div 
            onClick={() => handleNavClick('dashboard')}
            className="font-semibold text-lg tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            Mohan Jha
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-medium transition-colors duration-200 ${
                  currentView === item.id 
                    ? 'text-white' 
                    : 'text-ios-subtext hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ios-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-ios-card/95 backdrop-blur-xl border-b border-white/5 py-4 flex flex-col items-center gap-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium ${
                  currentView === item.id ? 'text-white' : 'text-ios-subtext'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
           {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center">
        <div className="text-xs text-ios-subtext">
          Designed by Mohan Jha. Powered by Intelligence.
        </div>
      </footer>
    </div>
  );
};