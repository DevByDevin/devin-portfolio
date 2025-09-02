interface SkillTagProps {
  name: string;
  variant?: 'default' | 'learning';
  className?: string;
}

export default function SkillTag({ name, variant = 'default', className = '' }: SkillTagProps) {
  const baseClasses = 'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200';

  const variantClasses = {
    default: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    learning: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  };

  return <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{name}</span>;
}
