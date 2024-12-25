import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Errors/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
    </Routes>
  );
};

export default AppRouter;
