export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'AWS', level: 55 },
      { name: 'Figma', level: 70 },
      { name: 'Agile', level: 80 },
    ],
  },
];

export const CURRENTLY_LEARNING: string[] = [
  'Web3',
  'Machine Learning & LLM',
  'WebQL & Three.js',
  'Pixijs',
];

export const SKILLS_SECTION = {
  title: 'Skills & Technologies',
  subtitle: 'My technical expertise and tools I use',
  currentlyLearningTitle: 'Currently Learning',
};
