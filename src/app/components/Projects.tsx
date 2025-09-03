'use client';

import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Demo from './ui/Demo';
import { PROJECTS } from '../constants/projects';
import ProjectCard from './ui/ProjectCard';
import NavigationArrows from './ui/NavigationArrows';
import IndicatorDots from './ui/IndicatorDots';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex(prev => (prev + 1) % PROJECTS.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentProject = PROJECTS[currentProjectIndex];
  return (
    <section id="projects" className="section-alt">
      <div className="mb-8 flex justify-center">
        <h1 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl dark:text-white">
          My Work
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-8 sm:flex-row sm:px-32">
        <div className="flex-1">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
            <div className="relative">
              <ProjectCard
                title={currentProject.title}
                description={currentProject.description}
                icon={currentProject.icon}
                technologies={currentProject.technologies}
                liveUrl={currentProject.liveUrl}
                projectNumber={currentProjectIndex + 1}
                totalProjects={PROJECTS.length}
                isAnimating={isAnimating}
              />

              <NavigationArrows onPrevious={prevProject} onNext={nextProject} />
            </div>

            <IndicatorDots
              total={PROJECTS.length}
              current={currentProjectIndex}
              onDotClick={index => {
                if (isAnimating) return;
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentProjectIndex(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className="mt-8 hidden sm:block"
            />
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-gray-100/60 backdrop-blur-md dark:bg-black/40">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={null}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <Demo texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
