import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function SocialLink({ href, icon, label, className = '' }: SocialLinkProps) {
  return (
    <a
      href={href}
      className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 ${className}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}
