interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({
  value,
  label,
  className = '',
}: StatCardProps) {
  return (
    <div
      className={`text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm ${className}`}
    >
      <div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
        {value}
      </div>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
    </div>
  );
}
