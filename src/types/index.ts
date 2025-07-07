export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  website?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai-ml' | 'payments' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Contact {
  type: 'phone' | 'email' | 'telegram' | 'linkedin';
  value: string;
  label: string;
  icon: string;
  isPreferred?: boolean;
}

export type Language = 'ru' | 'en' | 'he';

export interface Theme {
  mode: 'dark' | 'light';
  primaryColor: string;
  secondaryColor: string;
}