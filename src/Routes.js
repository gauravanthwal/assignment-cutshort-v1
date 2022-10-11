import React from "react";
import "./global.styles.css";
import UserOnboardingScreen from "./pages/userOnboarding/UserOnboarding";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UserOnboardingScreen />} />
        <Route path="/welcome" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
