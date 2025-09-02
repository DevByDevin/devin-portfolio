import React from 'react';

interface ProjectIconProps {
  icon: React.ReactNode;
  gradient: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ProjectIcon({
  icon,
  gradient,
  size = 'md',
  className = '',
}: ProjectIconProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl ${gradient} text-white ${sizeClasses[size]} ${className}`}
    >
      <div className={iconSizeClasses[size]}>{icon}</div>
    </div>
  );
}
