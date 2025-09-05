import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  type = 'button',
  disabled = false,
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: ButtonProps) {
  const classes = `btn-base btn-${variant} btn-${size} ${className}`;

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
