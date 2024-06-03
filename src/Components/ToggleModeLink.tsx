// ToggleModeLink.tsx
import React from "react";

interface ToggleModeLinkProps {
  isLoginPage: boolean;
  toggleMode: () => void;
}

const ToggleModeLink: React.FC<ToggleModeLinkProps> = ({
  isLoginPage,
  toggleMode,
}) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <span className="opacity-70">
        {isLoginPage ? "New User" : "Old User"}?
      </span>
      <button
        onClick={toggleMode}
        className="text-blue-500 hover:underline ml-2"
        aria-label={isLoginPage ? "Switch to Signup" : "Switch to Signin"}
      >
        {isLoginPage ? "Signup" : "Signin"}
      </button>
    </div>
  );
};

export default ToggleModeLink;
