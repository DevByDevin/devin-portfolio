import React from 'react';

interface IndicatorDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export default function IndicatorDots({
  total,
  current,
  onDotClick,
  className = '',
}: IndicatorDotsProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex-center-gap-sm">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all sm:h-3 sm:w-3 ${
              index === current ? 'w-6 bg-gray-500 sm:w-8' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
