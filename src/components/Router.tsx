import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import React from "react";
import TierContainer from "./TierConfiguration/TierConfigurationContainer";
import EarningRuleContainer from "./EarningRule/EarningRuleContainer";
import Popup from "./Popup";
import BurningRuleContainer from "./BurningRule/BurningRuleContainer";

function MyRouter() {
  return (
    <div>
      <Router>
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tier" element={<TierContainer />} />
          <Route path="/earning-rule" element={<EarningRuleContainer />} />
          <Route path="/burning-rule" element={<BurningRuleContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRouter;
