import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { ArrowUp, Sparkles, Bot } from 'lucide-react';
import { USER_PROFILE } from '../data';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello. I can tell you about ${USER_PROFILE.name}'s experience with Exchange Servers, AWS, or Java. What would you like to know?`,
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
    <div className="max-w-2xl mx-auto h-[600px] flex flex-col bg-ios-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
      
      {/* Header */}
      <div className="p-4 bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center justify-center relative">
        <div className="text-sm font-semibold text-white flex items-center gap-2">
          <Sparkles size={14} className="text-ios-blue" />
          Assistant
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/50">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] px-5 py-3 rounded-2xl text-[15px] leading-relaxed
                ${msg.role === 'user' 
                  ? 'bg-ios-blue text-white rounded-br-none' 
                  : 'bg-[#2c2c2e] text-ios-text rounded-bl-none'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-[#2c2c2e] px-5 py-4 rounded-2xl rounded-bl-none flex gap-1.5 items-center">
               <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
               <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
               <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white/5 backdrop-blur-md border-t border-white/5">
        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-full bg-[#1c1c1e] text-white rounded-full py-3.5 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-ios-blue/50 placeholder-neutral-500 text-sm"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-ios-blue rounded-full flex items-center justify-center text-white disabled:opacity-0 transition-opacity"
          >
            <ArrowUp size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};