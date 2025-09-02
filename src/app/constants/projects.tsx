import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siThreedotjs,
  siVite,
  siSupabase,
  siPrisma,
} from 'simple-icons';

import ProjectIcon from '../components/ui/ProjectIcon';
import { IconComponent } from './skillBubble';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
  liveUrl: string;
  texture: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Modern Portfolio Website',
    description:
      'A sophisticated, responsive portfolio website showcasing full-stack development skills with modern web technologies. Features include dark/light theme switching, internationalization support for English and Chinese, smooth animations, and a unique 3D project showcase. The site demonstrates advanced React patterns, responsive design principles, and modern CSS techniques including frosted glass effects and backdrop blur.',
    icon: (
      <ProjectIcon
        icon={<IconComponent icon={siNextdotjs} className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
      />
    ),
    texture: '/textures/projects/project1.mp4',
    technologies: [
      {
        name: 'Next.js 15',
        icon: <IconComponent icon={siNextdotjs} className="h-4 w-4" />,
        color: 'bg-purple-600',
      },
      {
        name: 'React 19',
        icon: <IconComponent icon={siReact} className="h-4 w-4" />,
        color: 'bg-blue-500',
      },
      {
        name: 'TypeScript',
        icon: <IconComponent icon={siTypescript} className="h-4 w-4" />,
        color: 'bg-blue-600',
      },
      {
        name: 'Tailwind CSS',
        icon: <IconComponent icon={siTailwindcss} className="h-4 w-4" />,
        color: 'bg-cyan-500',
      },
      {
        name: 'Three.js',
        icon: <IconComponent icon={siThreedotjs} className="h-4 w-4" />,
        color: 'bg-green-600',
      },
      {
        name: 'GSAP',
        icon: <div className="text-xs font-bold text-white">GSAP</div>,
        color: 'bg-yellow-500',
      },
    ],
    liveUrl: 'https://github.com/DevByDevin/my-adventure',
  },
  {
    id: 2,
    title: 'Cyberpunk 3D Text Generator',
    description:
      'A cutting-edge 3D web application built with React Three Fiber that generates stunning cyberpunk-style 3D text models. Features include real-time 3D rendering, interactive camera controls, dynamic lighting effects, and a modular letter system that allows users to create custom 3D text compositions with cyberpunk aesthetics.',
    icon: (
      <ProjectIcon
        icon={<IconComponent icon={siThreedotjs} className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-cyan-500 to-purple-600"
      />
    ),
    texture: '/textures/projects/project2.mp4',
    technologies: [
      {
        name: 'React',
        icon: <IconComponent icon={siReact} className="h-4 w-4" />,
        color: 'bg-blue-500',
      },
      {
        name: 'Three.js',
        icon: <IconComponent icon={siThreedotjs} className="h-4 w-4" />,
        color: 'bg-green-600',
      },
      {
        name: 'Vite',
        icon: <IconComponent icon={siVite} className="h-4 w-4" />,
        color: 'bg-yellow-500',
      },
      {
        name: 'Tailwind CSS',
        icon: <IconComponent icon={siTailwindcss} className="h-4 w-4" />,
        color: 'bg-cyan-500',
      },
    ],
    liveUrl: 'https://github.com/DevByDevin/Threejs-react',
  },
  {
    id: 3,
    title: 'My Adventure - Interactive Game Dashboard',
    description:
      'My Adventure is a comprehensive gaming platform that allows users to create and manage their own fantasy worlds and characters. Built with modern web technologies, it features a responsive dashboard interface, real-time data management, and an intuitive game flow system for starting adventures. The platform includes user authentication, world creation wizards, character management, and a sophisticated game session system.',
    icon: (
      <ProjectIcon
        icon={<IconComponent icon={siNextdotjs} className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-amber-500 to-orange-600"
      />
    ),
    texture: '/textures/projects/project3.mp4',
    technologies: [
      {
        name: 'Next.js 13+',
        icon: <IconComponent icon={siNextdotjs} className="h-4 w-4" />,
        color: 'bg-purple-600',
      },
      {
        name: 'TypeScript',
        icon: <IconComponent icon={siTypescript} className="h-4 w-4" />,
        color: 'bg-blue-600',
      },
      {
        name: 'Supabase',
        icon: <IconComponent icon={siSupabase} className="h-4 w-4" />,
        color: 'bg-emerald-600',
      },
      {
        name: 'Prisma',
        icon: <IconComponent icon={siPrisma} className="h-4 w-4" />,
        color: 'bg-slate-700',
      },
    ],
    liveUrl: 'https://github.com/DevByDevin/my-adventure',
  },
];
