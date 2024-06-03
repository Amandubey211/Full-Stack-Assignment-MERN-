import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/AppStore";

const Header: React.FC = () => {
  const userDetails = useSelector((store: RootState) => store.User.userDetails);

  return (
    <header className="flex justify-between items-center p-4  shadow-md">
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-blue-200 transition duration-300">
          Invoice.Io
        </a>
      </div>
      <nav className="flex space-x-6 items-center">
        <span className="text-lg">{userDetails.name}</span>
        <a
          href="#"
          className="text-lg hover:text-blue-200 transition duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 6V5m0 10v1"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default Header;
