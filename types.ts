export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type ViewState = 'dashboard' | 'projects' | 'timeline' | 'chat';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}