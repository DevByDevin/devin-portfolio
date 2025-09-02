interface ExpandButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  totalCount: number;
  hiddenCount: number;
  className?: string;
}

export default function ExpandButton({
  isExpanded,
  onToggle,
  totalCount,
  className = '',
}: ExpandButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center rounded-lg border border-blue-200/50 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300/70 hover:bg-blue-200/90 dark:border-blue-700/50 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:border-blue-600/70 dark:hover:bg-blue-800/60 ${className}`}
    >
      {isExpanded ? 'Show Less' : `Show All (${totalCount})`}
    </button>
  );
}
