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
    icon: <ReactIcon className="h-3 w-3 text-blue-600 sm:h-4 sm:w-4" />,
    name: 'React',
    category: 'frontend',
  },
  {
    icon: <ViteIcon className="h-3 w-3 text-purple-600 sm:h-4 sm:w-4" />,
    name: 'Vite',
    category: 'tooling',
  },
  {
    icon: <TailwindIcon className="h-3 w-3 text-cyan-600 sm:h-4 sm:w-4" />,
    name: 'Tailwind',
    category: 'frontend',
  },
  {
    icon: <ZustandIcon className="h-3 w-3 text-orange-600 sm:h-4 sm:w-4" />,
    name: 'Zustand',
    category: 'frontend',
  },
  {
    icon: <AzureIcon className="h-3 w-3 text-blue-700 sm:h-4 sm:w-4" />,
    name: 'Azure',
    category: 'cloud',
  },
  {
    icon: <TsIcon className="h-3 w-3 text-blue-500 sm:h-4 sm:w-4" />,
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
    <span className="hidden text-[8px] font-medium text-white sm:block">{item.name}</span>
  </div>
));

export const SKILLS_CENTER = (
  <div className="flex flex-col items-center">
    <span className="text-[10px] font-black text-white">{SKILL_FLOWER_CENTER.title}</span>
  </div>
);
