interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'tel';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  id,
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
}: FormInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-gray-300/40 bg-gray-100/60 px-4 py-3 text-gray-900 backdrop-blur-md placeholder:text-gray-500 focus:border-gray-400 focus:ring-0 dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-white/20"
        placeholder={placeholder}
      />
    </div>
  );
}
