interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
  className?: string;
}

export default function StatusMessage({ type, message, className = '' }: StatusMessageProps) {
  const isSuccess = type === 'success';

  const containerClasses = `mt-4 rounded-lg border p-4 ${className}`;
  const iconClasses = `mr-2 h-5 w-5`;
  const textClasses = 'text-sm';

  if (isSuccess) {
    return (
      <div className={`${containerClasses} border-green-200 bg-green-50`}>
        <div className="flex items-center">
          <svg className={`${iconClasses} text-green-400`} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className={`${textClasses} text-green-800`}>{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerClasses} border-red-200 bg-red-50`}>
      <div className="flex items-center">
        <svg className={`${iconClasses} text-red-400`} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        <span className={`${textClasses} text-red-800`}>{message}</span>
      </div>
    </div>
  );
}
