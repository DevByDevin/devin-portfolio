import {
  siBabel,
  siClaude,
  siDocker,
  siExpo,
  siGit,
  siGithub,
  siGithubactions,
  siI18next,
  siJenkins,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOpenai,
  siPostgresql,
  siPrisma,
  siReact,
  siRedux,
  siStorybook,
  siSupabase,
  siSwift,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVite,
  siWebpack,
  SimpleIcon,
} from 'simple-icons';

interface SkillBubbleData {
  icon: SimpleIcon;
  name: string;
  color: string;
}

export const IconComponent = ({
  icon,
  className,
}: {
  icon: SimpleIcon;
  className: string;
}): React.ReactNode => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

const SKILL_BUBBLE_DATA: SkillBubbleData[] = [
  { icon: siReact, name: 'React', color: '#EF5350' },
  { icon: siTypescript, name: 'TypeScript', color: '#64B5F6' },
  { icon: siNextdotjs, name: 'Next.js', color: '#8D6E63' },
  { icon: siTailwindcss, name: 'Tailwind', color: '#4DD0E1' },
  { icon: siNodedotjs, name: 'Node.js', color: '#66BB6A' },
  { icon: siPrisma, name: 'Prisma', color: '#29B6F6' },
  { icon: siPostgresql, name: 'PostgreSQL', color: '#42A5F5' },
  { icon: siMongodb, name: 'MongoDB', color: '#66BB6A' },
  { icon: siRedux, name: 'Redux', color: '#BA68C8' },
  { icon: siGit, name: 'Git', color: '#FF7043' },
  { icon: siGithub, name: 'GitHub', color: '#AB47BC' },
  { icon: siVite, name: 'Vite', color: '#F48FB1' },
  { icon: siWebpack, name: 'Webpack', color: '#FFD54F' },
  { icon: siBabel, name: 'Babel', color: '#4FC3F7' },
  { icon: siDocker, name: 'Docker', color: '#FFD700' },
  { icon: siGithubactions, name: 'GitHub Actions', color: '#42A5F5' },
  { icon: siJenkins, name: 'Jenkins', color: '#81D4FA' },
  { icon: siExpo, name: 'Expo', color: '#5C6BC0' },
  { icon: siSwift, name: 'Swift', color: '#FF8A65' },
  { icon: siThreedotjs, name: 'Three.js', color: '#CE93D8' },
  { icon: siSupabase, name: 'Supabase', color: '#4DB6AC' },
  { icon: siI18next, name: 'I18next', color: '#26A69A' },
  { icon: siStorybook, name: 'Storybook', color: '#FFB74D' },
  { icon: siOpenai, name: 'OpenAI', color: '#AB47BC' },
  { icon: siClaude, name: 'Claude', color: '#EF5350' },
];

export interface SkillBubbleItem {
  index: number;
  icon: React.ReactNode;
  name: string;
  color: string;
}

export const SKILL_BUBBLE_ITEMS = SKILL_BUBBLE_DATA.map((data, index) => ({
  index: index,
  name: data.name,
  icon: <IconComponent icon={data.icon} className="icon-responsive" />,
  color: data.color,
}));
