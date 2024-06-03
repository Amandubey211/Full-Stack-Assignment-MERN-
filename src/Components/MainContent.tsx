import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../Asset/banner.webp";
const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center p-4  h-full w-full">
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xl">
        <img
          src={banner}
          alt="Invoice Illustration"
          className="w-full mb-4 rounded"
        />
        <div className="flex gap-3 flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Create professional invoices easily.
          </h1>
          <div className="w-full ">
            <NavLink
              to="/product_page"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-1/2 transition duration-300"
            >
              Get Started
            </NavLink>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Our tool helps you generate invoices in just a few clicks.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
