import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: 'primary' | 'secondary' | 'ghost' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  varient = 'primary',
  size = 'md',
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:shadow-2xl hover:scale-105 
			${varient === 'primary' && 'bg-[#7e9a7e] text-white'} 
			${varient === 'secondary' && 'bg-white text-black'}
      ${
        varient === 'ghost' &&
        'bg-transparent text-black hover:bg-[#7e9a7e] hover:text-white'
      }
			${
        varient === 'outlined' &&
        'bg-transparent border-2 border-[#7e9a7e] text-[#7e9a7e] hover:bg-[#7e9a7e] hover:text-white'
      }
			${size === 'lg' && 'h-10 py-2 px-4 text-lg'}
			${size === 'md' && 'h-8 py-2 px-3 text-md'}
			${size === 'sm' && 'h-6 py-1 px-2 text-sm'}
			${className}
			`}
      {...props}
      disabled={isLoading}
    >
      {isLoading && <span className="loading-spinner"></span>}
      {children}
    </button>
  );
};
