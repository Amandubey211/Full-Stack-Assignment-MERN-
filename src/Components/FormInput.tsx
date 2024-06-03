// FormInput.tsx
import React, { ChangeEvent } from "react";

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-semibold">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        aria-label={`Enter your ${label.toLowerCase()}`}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
};

export default FormInput;
