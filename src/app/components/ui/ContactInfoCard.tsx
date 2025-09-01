import { ReactNode } from 'react';

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  content: string;
  className?: string;
}

export default function ContactInfoCard({
  icon,
  title,
  content,
  className = '',
}: ContactInfoCardProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
        <div className="text-blue-600 dark:text-blue-400">{icon}</div>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
}
