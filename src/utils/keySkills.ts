import { skillsData } from '../data/skills';

const blockedSkills = new Set([
  'jwt',
  'git',
  'redux',
  'react',
  'prisma',
  'angularjs',
  'html5/css3',
  'apollo server',
  'websocket',
  'typeorm',
  'docker',
  'sequelize',
]);
const heightPriority = new Map([
  ['PostgreSQL', 90],
  ['Redis', 89],
  ['AWS', 87],
  ['Prometheus', 86],
  ['jQuery', 10],
  ['REST APIs', 10],
]);

/**
 * Get top skills filtered by minimum level threshold
 * @param threshold - Minimum skill level (default: 80)
 * @param limit - Maximum number of skills to return (default: 8)
 * @returns Array of skills sorted by level (descending)
 */
export const getKeySkills = (threshold: number = 60, limit: number = 10) => {
  console.log(skillsData)
  return skillsData
    .filter(skill => {
      if (blockedSkills.has(skill.name.toLowerCase())) {
        return false;
      }
      const level = heightPriority.get(skill.name) || skill.level;
      return level >= threshold;
    })
    .sort((a, b) => {
      const aLevel = heightPriority.get(a.name) || a.level;
      const bLevel = heightPriority.get(b.name) || b.level;

      return bLevel - aLevel;
    })
    .slice(0, limit);
};

