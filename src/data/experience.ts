import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'valletta',
    company: 'VallettaSoftware',
    position: 'Tech Lead',
    period: 'February 2025 — present',
    duration: '6 months',
    description: 'Technical Lead – U.S. Agricultural Platform',
    achievements: [
      'Acted as the technical lead for a project serving farms across the United States',
      'Designed and implemented backend architecture and cloud infrastructure',
      'Worked cross-functionally with DevOps, frontend teams, and stakeholders',
      'Ensured system scalability, reliability, and maintainability'
    ],
    technologies: ['Node.js', 'AWS', 'Cloud Architecture', 'DevOps', 'Team Leadership'],
    website: 'https://vallettasoftware.com'
  },
  {
    id: 'aithor',
    company: 'Aithor',
    position: 'FullStack Developer',
    period: 'July 2024 — November 2024',
    duration: '5 months',
    description: 'AI-powered platform development',
    achievements: [
      'Developed new functionality for multiple websites, refactored old solutions',
      'Integrated payment systems Stripe and Paddle for online payment processing',
      'Set up authentication through Auth0 for secure user login',
      'Integrated Zapier for workflow automation and connecting various services',
      'Developed system using OpenAI API with Qdrant vector database for semantic search'
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'Paddle', 'Auth0', 'OpenAI API', 'Qdrant', 'Zapier'],
    website: 'https://aithor.com'
  },
  {
    id: 'impress',
    company: 'Impress',
    position: 'Fullstack Developer',
    period: 'July 2023 — July 2024',
    duration: '1 year 1 month',
    description: 'Full-stack development and system integration',
    achievements: [
      'Designed, developed, and led new services from scratch',
      'Supported and refactored legacy infrastructure',
      'Integrated third-party systems into different parts of the architecture',
      'Integrated Stripe payment system for processing subscriptions'
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'Legacy Systems', 'System Integration'],
    website: 'https://smile2impress.com'
  },
  {
    id: 'infobip',
    company: 'Infobip LLC',
    position: 'Backend Developer',
    period: 'December 2018 — May 2023',
    duration: '4 years 6 months',
    description: 'Web infrastructure platform development',
    achievements: [
      'Developed and supported multiple services in distributed system',
      'Refactored legacy common library and migrated to separate services',
      'Developed GraphQL platform with Apollo Federation',
      'Integrated new translation system (Smartcat)',
      'Automated bulk updates across multiple web applications using Jenkins',
      'Designed versioning system for client applications per environment'
    ],
    technologies: ['Node.js', 'NestJS', 'GraphQL', 'Apollo Federation', 'Jenkins', 'Smartcat', 'Distributed Systems'],
    website: 'https://www.infobip.com'
  },
  {
    id: 'alfabank',
    company: 'Alfa-Bank',
    position: 'Lead Frontend Developer',
    period: 'February 2017 — December 2018',
    duration: '1 year 11 months',
    description: 'Banking applications development',
    achievements: [
      'Worked in Agile team with designer and product owner',
      'Developed frontend for mobile application and web using ReactJS',
      'Designed interface for internal services for getting card information',
      'Participated in interviews for new hires and mentored new developers',
      'Represented company at conferences'
    ],
    technologies: ['React', 'React Native', 'Agile', 'Team Leadership', 'Mentoring'],
    website: 'https://www.alfabank.ru'
  },
  {
    id: 'semrush',
    company: 'SEMrush',
    position: 'Fullstack Developer',
    period: 'July 2015 — July 2016',
    duration: '1 year 1 month',
    description: 'Internal product development',
    achievements: [
      'Wrote bot for parsing sites using selenium and docker',
      'Created hundreds of bot instances to parse thousands of sites',
      'Designed API and NodeJS api architecture for client panel',
      'Cooperated with designers for building UI/UX',
      'Developed UI interface of client panel'
    ],
    technologies: ['Node.js', 'Selenium', 'Docker', 'Web Scraping', 'API Design', 'UI/UX'],
    website: 'https://semrush.com'
  },
  {
    id: 'geometria',
    company: 'Geometria.ru',
    position: 'Frontend Developer',
    period: 'December 2013 — July 2015',
    duration: '1 year 8 months',
    description: 'Frontend development with AngularJS',
    achievements: [
      'Developing frontend with AngularJS',
      'Configuring build process with Grunt and Gulp',
      'JavaScript code optimization'
    ],
    technologies: ['AngularJS', 'Grunt', 'Gulp', 'JavaScript', 'Frontend Optimization'],
    website: 'https://www.geometria.ru'
  },
  {
    id: 'realweb',
    company: 'RealWeb',
    position: 'Frontend/Backend Developer',
    period: 'December 2011 — May 2012',
    duration: '6 months',
    description: 'New company project development',
    achievements: [
      'Frontend with jQuery',
      'Backend with ZendFramework'
    ],
    technologies: ['jQuery', 'ZendFramework', 'PHP', 'Frontend', 'Backend'],
    website: 'https://www.realweb.ru'
  },
  {
    id: 'realweb-early',
    company: 'RealWeb',
    position: 'Frontend Developer',
    period: 'November 2009 — December 2011',
    duration: '2 years 2 months',
    description: 'HTML coding and template integration',
    achievements: [
      'HTML coding',
      'Template integration with XSLT',
      'Server-side functionality development'
    ],
    technologies: ['HTML', 'XSLT', 'Server-side Development'],
    website: 'https://www.realweb.ru'
  },
  {
    id: 'webmaster',
    company: 'Webmaster.spb',
    position: 'HTML Coder',
    period: 'April 2008 — October 2009',
    duration: '1 year 7 months',
    description: 'Commercial sites development',
    achievements: [
      'Commercial sites coder'
    ],
    technologies: ['HTML', 'CSS', 'Commercial Websites'],
    website: 'https://www.webmaster.spb.ru'
  },
  {
    id: 'altitudo',
    company: 'Altitudo',
    position: 'HTML Coder',
    period: 'September 2007 — April 2008',
    duration: '8 months',
    description: 'Commercial sites and CMS integration',
    achievements: [
      'Commercial sites coder',
      'Template integration to UMI CMS'
    ],
    technologies: ['HTML', 'CSS', 'UMI CMS', 'Template Integration'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'HTML coder',
    period: 'January 2007 — August 2007',
    duration: '8 months',
    description: 'Website creation and support',
    achievements: [
      'Website creation and support'
    ],
    technologies: ['HTML', 'CSS', 'Website Development'],
  }
];