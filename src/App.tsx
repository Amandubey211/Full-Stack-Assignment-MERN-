import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./Redux/Store/AppStore";
import LoginPage from "./Pages/LoginPage";
import ProtectRoute from "./ProtectedRoute/ProtectedRoutes";
import HomePage from "./Pages/HomePage";
import Productpage from "./Pages/Productpage";

const App: React.FC = () => {
  return (
    <Provider store={AppStore}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={<ProtectRoute Component={HomePage} />}
            />
            <Route
              path="/product_page"
              element={<ProtectRoute Component={Productpage} />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
