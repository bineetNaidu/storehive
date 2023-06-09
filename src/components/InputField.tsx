import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message?: string;
}

export const InputField: FC<Props> = ({
  label,
  message,
  className,
  ...fieldProps
}) => {
  return (
    <div className={`form-control w-full max-w-sm ${className}`}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        {...fieldProps}
        className="input input-bordered w-full max-w-xs bg-brand-primary text-brand-font-color"
      />
      {message && (
        <label className="label">
          <span className="label-text-alt text-red-500">{message}</span>
        </label>
      )}
    </div>
  );
};
