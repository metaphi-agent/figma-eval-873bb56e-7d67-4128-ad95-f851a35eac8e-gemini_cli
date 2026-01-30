import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'w-full bg-bg-tertiary text-text-main rounded px-4 py-2 outline-none border transition-colors duration-150',
        'placeholder:text-text-dim',
        {
          'border-transparent focus:border-accent-primary': !error,
          'border-accent-red focus:border-accent-red': error,
        },
        className
      )}
      {...props}
    />
  );
}