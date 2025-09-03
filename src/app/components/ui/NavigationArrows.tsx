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
      <button onClick={onPrevious} className="btn-nav" aria-label="Previous project">
        <ArrowLeftIcon className="icon-sm sm:h-6 sm:w-6" />
      </button>
      <button onClick={onNext} className="btn-nav" aria-label="Next project">
        <ArrowRightIcon className="icon-sm sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}
