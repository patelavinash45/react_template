import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* define route hear  */}
        <Route index element={<></>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
