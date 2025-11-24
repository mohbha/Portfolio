import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';
import { USER_PROFILE } from '../data';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `System initialized. I am Nexus, the digital assistant for ${USER_PROFILE.name}. Ask me about skills, projects, or work history.`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] max-w-4xl mx-auto flex flex-col glass-panel rounded-2xl overflow-hidden border border-nexus-accent/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-nexus-900/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-sm tracking-widest text-nexus-accent">ORACLE.SYS // CONNECTED</span>
        </div>
        {!process.env.API_KEY && (
           <div className="flex items-center gap-2 text-amber-500 text-xs">
             <AlertCircle size={14} />
             <span>DEMO MODE (No API Key)</span>
           </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'model' && (
              <div className="w-8 h-8 rounded-lg bg-nexus-secondary/20 flex items-center justify-center border border-nexus-secondary/50 flex-shrink-0">
                <Bot size={18} className="text-nexus-secondary" />
              </div>
            )}
            
            <div className={`max-w-[80%] md:max-w-[70%] p-4 rounded-xl text-sm leading-relaxed
              ${msg.role === 'user' 
                ? 'bg-nexus-accent/10 border border-nexus-accent/20 text-white rounded-tr-none' 
                : 'bg-white/5 border border-white/10 text-nexus-text rounded-tl-none'
              }`}
            >
              {msg.text}
              <div className="mt-2 text-[10px] opacity-40 font-mono text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 flex-shrink-0">
                <User size={18} className="text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-lg bg-nexus-secondary/20 flex items-center justify-center border border-nexus-secondary/50 flex-shrink-0">
                <Bot size={18} className="text-nexus-secondary" />
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl rounded-tl-none flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-nexus-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                 <span className="w-1.5 h-1.5 bg-nexus-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                 <span className="w-1.5 h-1.5 bg-nexus-secondary rounded-full animate-bounce"></span>
              </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-nexus-900/50 border-t border-white/10">
        <form onSubmit={handleSend} className="relative group">
          <div className="absolute inset-0 bg-nexus-accent/5 rounded-xl blur-md group-focus-within:bg-nexus-accent/10 transition-colors" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my experience with React..."
            className="w-full bg-nexus-800/80 border border-white/10 rounded-xl py-4 pl-5 pr-14 text-white placeholder-nexus-muted focus:outline-none focus:border-nexus-accent/50 focus:ring-1 focus:ring-nexus-accent/50 transition-all relative z-10"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-nexus-accent/10 rounded-lg text-nexus-accent hover:bg-nexus-accent hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
          >
            {isLoading ? <Sparkles size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </form>
        <div className="mt-2 text-center">
            <span className="text-[10px] text-nexus-muted/50 font-mono">
                AI can make mistakes. Please verify important information.
            </span>
        </div>
      </div>
    </div>
  );
};
