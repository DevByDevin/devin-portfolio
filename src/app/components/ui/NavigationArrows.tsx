import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export default function NavigationArrows({
  onPrevious,
  onNext,
  className = '',
}: NavigationArrowsProps) {
  return (
    <div className={`absolute right-4 bottom-5 z-10 flex gap-2 ${className}`}>
      <button
        onClick={onPrevious}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-2 text-black transition-all duration-500 hover:bg-gray-800/30 sm:h-11 sm:w-11 sm:p-2.5 lg:h-12 lg:w-12 lg:p-3 dark:text-white"
        aria-label="Previous"
      >
        <ArrowLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={onNext}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-2 text-black transition-all duration-500 hover:bg-gray-800/30 sm:h-11 sm:w-11 sm:p-2.5 lg:h-12 lg:w-12 lg:p-3 dark:text-white"
        aria-label="Next"
      >
        <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}
