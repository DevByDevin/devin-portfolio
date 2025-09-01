interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 text-center ${className}`}>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">{description}</p>
      )}
    </div>
  );
}
