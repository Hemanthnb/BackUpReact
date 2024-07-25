// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Other routes */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;


