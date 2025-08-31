export interface StatCard {
  value: string;
  label: string;
}

export interface QuickFact {
  text: string;
}

export const ABOUT_SECTION = {
  title: 'About Me',
  subtitle: 'Get to know me better',
  whoIAmTitle: 'Who I Am',
  quickFactsTitle: 'Quick Facts',
};

export const QUICK_FACTS: QuickFact[] = [
  { text: 'Full-Stack Development' },
  { text: 'React & Next.js Expert' },
  { text: 'Node.js & TypeScript' },
  { text: 'UI/UX Design' },
  { text: 'Database Design' },
];

export const STAT_CARDS: StatCard[] = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
];

export const WHO_I_AM_DESCRIPTION = [
  "I'm a passionate full-stack developer with a love for creating innovative solutions. With expertise in modern web technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
  "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
];
