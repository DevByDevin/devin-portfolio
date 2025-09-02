interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-300/40 bg-gray-100/60 p-4 text-center backdrop-blur-md dark:border-white/10 dark:bg-black/40 ${className}`}
    >
      <div className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}
