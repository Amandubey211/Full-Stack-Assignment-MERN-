// PasswordInput.tsx
import React, { ChangeEvent } from "react";

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  showPassword: boolean;
  toggleVisibility: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  value,
  showPassword,
  toggleVisibility,
  onChange,
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="block mb-1 font-semibold">
        {label}:
      </label>
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        required
        aria-label={`Enter your ${label.toLowerCase()}`}
        className="w-full border rounded px-3 py-2 pr-10"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute top-9 right-0 pr-3 flex items-center text-sm"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;
