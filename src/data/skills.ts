import { Skill } from '../types';

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Redux', level: 80, category: 'frontend' },
  { name: 'AngularJS', level: 75, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 95, category: 'frontend' },
  { name: 'jQuery', level: 70, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 95, category: 'backend' },
  { name: 'Express', level: 90, category: 'backend' },
  { name: 'NestJS', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'Apollo Server', level: 75, category: 'backend' },
  { name: 'JWT', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },

  // Database
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'Redis', level: 80, category: 'database' },
  { name: 'Sequelize', level: 75, category: 'database' },
  { name: 'TypeORM', level: 70, category: 'database' },
  { name: 'Prisma', level: 65, category: 'database' },

  // DevOps
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'AWS', level: 80, category: 'devops' },
  { name: 'Jenkins', level: 75, category: 'devops' },
  { name: 'GitHub Actions', level: 70, category: 'devops' },
  { name: 'Ansible', level: 65, category: 'devops' },
  { name: 'Prometheus', level: 60, category: 'devops' },
  { name: 'Grafana', level: 60, category: 'devops' },

  // AI/ML
  { name: 'OpenAI API', level: 80, category: 'ai-ml' },
  { name: 'Qdrant', level: 75, category: 'ai-ml' },
  { name: 'Semantic Search', level: 70, category: 'ai-ml' },
  { name: 'Vector Databases', level: 65, category: 'ai-ml' },

  // Payments
  { name: 'Stripe', level: 85, category: 'payments' },
  { name: 'Paddle', level: 75, category: 'payments' },
  { name: 'Auth0', level: 80, category: 'payments' },

  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'WebSocket', level: 75, category: 'tools' },
  { name: 'RabbitMQ', level: 70, category: 'tools' },
  { name: 'Zapier', level: 65, category: 'tools' },
  { name: 'Selenium', level: 70, category: 'tools' },
  { name: 'jmeter', level: 60, category: 'tools' },
];

export const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: '🎨', color: '#64b5f6' },
  { id: 'backend', name: 'Backend', icon: '⚙️', color: '#4caf50' },
  { id: 'database', name: 'Database', icon: '🗄️', color: '#ff9800' },
  { id: 'devops', name: 'DevOps', icon: '🚀', color: '#9c27b0' },
  { id: 'ai-ml', name: 'AI/ML', icon: '🤖', color: '#f44336' },
  { id: 'payments', name: 'Payments', icon: '💳', color: '#00bcd4' },
  { id: 'tools', name: 'Tools', icon: '🔧', color: '#795548' },
];