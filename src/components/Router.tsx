import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import React from "react";
import TierContainer from "./TierConfiguration/TierConfigurationContainer";
import Popup from "./Popup";

function MyRouter() {
  return (
    <div>
      <Router>
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tier" element={<TierContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRouter;
