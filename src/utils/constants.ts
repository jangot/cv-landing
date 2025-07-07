export const SITE_CONFIG = {
  name: 'Pavel Pulin',
  title: 'Tech Lead & Full-Stack Developer',
  description: '18+ лет опыта в разработке. От HTML-кодера до Tech Lead',
  location: 'Israel',
  citizenship: ['Russia', 'Israel'],
} as const;

export const SECTIONS = {
  hero: 'hero',
  about: 'about',
  experience: 'experience',
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
} as const;

export const LANGUAGES = {
  ru: { name: 'Русский', flag: '🇷🇺' },
  en: { name: 'English', flag: '🇺🇸' },
  he: { name: 'עברית', flag: '🇮🇱' },
} as const;

export const THEME_COLORS = {
  dark: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    primary: '#64b5f6',
    secondary: '#4caf50',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
  },
  light: {
    background: '#ffffff',
    surface: '#f5f5f5',
    primary: '#1976d2',
    secondary: '#388e3c',
    text: '#000000',
    textSecondary: '#666666',
  },
} as const;