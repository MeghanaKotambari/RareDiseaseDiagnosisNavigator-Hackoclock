import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import Diagnose from "../Pages/Diagnose";
import Result from "../Pages/Result";
import AboutPage from "../Pages/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/diagnose" element={<Diagnose />} />
      <Route path="/results" element={<Result />} />
    </Routes>
  );
};

export default AppRoutes;