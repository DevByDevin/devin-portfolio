import { ReactNode } from 'react';
import {
  ReactIcon,
  ViteIcon,
  TailwindIcon,
  ZustandIcon,
  AzureIcon,
  TsIcon,
} from '../../../public/assets/Icons';

export interface SkillFlowerItem {
  icon: ReactNode;
  name: string;
  category: 'frontend' | 'backend' | 'tooling' | 'database' | 'cloud' | 'language';
}

export interface SkillFlowerData {
  items: SkillFlowerItem[];
  center: {
    icon?: ReactNode;
    title: string;
    subtitle?: string;
  };
}

const SKILL_FLOWER_ITEMS: SkillFlowerItem[] = [
  {
    icon: <ReactIcon className="h-4 w-4 text-blue-600" />,
    name: 'React',
    category: 'frontend',
  },
  {
    icon: <ViteIcon className="h-4 w-4 text-purple-600" />,
    name: 'Vite',
    category: 'tooling',
  },
  {
    icon: <TailwindIcon className="h-4 w-4 text-cyan-600" />,
    name: 'Tailwind',
    category: 'frontend',
  },
  {
    icon: <ZustandIcon className="h-4 w-4 text-orange-600" />,
    name: 'Zustand',
    category: 'frontend',
  },
  {
    icon: <AzureIcon className="h-4 w-4 text-blue-700" />,
    name: 'Azure',
    category: 'cloud',
  },
  {
    icon: <TsIcon className="h-4 w-4 text-blue-500" />,
    name: 'TypeScript',
    category: 'language',
  },
];

const SKILL_FLOWER_CENTER = {
  icon: (
    <div className="flex h-2 w-2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
  ),
  title: 'Skills',
  subtitle: 'Core Technologies',
};

export const SKILLS_ITEMS = SKILL_FLOWER_ITEMS.map(item => (
  <div key={item.name} className="flex flex-col items-center">
    {item.icon}
    <span className="text-[8px] font-medium text-white">{item.name}</span>
  </div>
));

export const SKILLS_CENTER = (
  <div className="flex flex-col items-center">
    <span className="text-[10px] font-black text-white">{SKILL_FLOWER_CENTER.title}</span>
  </div>
);
