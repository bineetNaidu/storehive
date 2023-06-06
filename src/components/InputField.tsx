import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message?: string;
}

export const InputField: FC<Props> = ({ label, message, ...fieldProps }) => {
  return (
    <div className="form-control w-full max-w-sm">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...fieldProps}
        className="input input-bordered w-full max-w-xs bg-brand-primary text-brand-font-color"
      />
      {message && (
        <label className="label">
          <span className="label-text-alt">{message}</span>
        </label>
      )}
    </div>
  );
};
