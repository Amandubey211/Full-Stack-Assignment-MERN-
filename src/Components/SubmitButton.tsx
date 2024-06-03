// SubmitButton.tsx
import React from "react";

interface SubmitButtonProps {
  isLoading: boolean;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, label }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      aria-disabled={isLoading}
    >
      {isLoading ? `Processing...` : label}
    </button>
  );
};

export default SubmitButton;
