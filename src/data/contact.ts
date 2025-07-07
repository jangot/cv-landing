import { Contact } from '../types';

export const contactData: Contact[] = [
  {
    type: 'telegram',
    value: 'https://t.me/jangot',
    label: '@jangot',
    icon: '📱',
    isPreferred: true,
  },
  {
    type: 'phone',
    value: 'tel:+972559206723',
    label: '+972 55 9206723',
    icon: '📞',
  },
  {
    type: 'email',
    value: 'mailto:pulin.pavel@gmail.com',
    label: 'pulin.pavel@gmail.com',
    icon: '📧',
  },
  {
    type: 'linkedin',
    value: 'https://www.linkedin.com/in/pavel-pulin-156528b5/',
    label: 'LinkedIn Profile',
    icon: '💼',
  },
];