import React from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: Technology[];
  liveUrl: string;
  projectNumber: number;
  totalProjects: number;
  isAnimating: boolean;
}

export default function ProjectCard({
  title,
  description,
  icon,
  technologies,
  liveUrl,
  projectNumber,
  totalProjects,
  isAnimating,
}: ProjectCardProps) {
  return (
    <div
      className={`card-frosted rounded-2xl p-6 transition-opacity duration-300 sm:h-auto sm:min-h-132 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      } flex flex-col`}
    >
      <div className="mb-6 flex flex-col items-start gap-3">
        {icon}
        <div className="min-w-0 flex-1">
          <h2 className="h-16 overflow-hidden align-middle text-xl font-bold text-gray-900 sm:h-20 sm:text-2xl lg:text-3xl dark:text-white">
            {title}
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p className="pr-6 text-sm leading-relaxed sm:text-base">{description}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${tech.color} text-white transition-transform hover:scale-110 sm:h-10 sm:w-10`}
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-start justify-between gap-3">
        <div className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
          Project {projectNumber} of {totalProjects}
        </div>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white transition-all hover:bg-gray-800 sm:px-4 sm:text-base dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Check Live Site
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  );
}
