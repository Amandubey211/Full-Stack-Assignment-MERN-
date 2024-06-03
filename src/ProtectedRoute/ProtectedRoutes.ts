import React, { ComponentType } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../Redux/Store/AppStore"; // Adjust the import based on your store's location

interface ProtectRouteProps {
  Component: ComponentType<any>;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ Component }) => {
  const isSignedIn = useSelector((store: RootState) => store.Auth.isLoggedIn);

  if (!isSignedIn) {
    return React.createElement(Navigate, { to: "/" });
  }

  return React.createElement(Component);
};

export default ProtectRoute;
