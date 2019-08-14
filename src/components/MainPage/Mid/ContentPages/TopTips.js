import React from "react";
import { Route, HashRouter } from "react-router-dom";

const TopTips = () => {
  return (
    <HashRouter>
      <Route path="/toptips" exact render={() => <div>Test</div>} />
    </HashRouter>
  );
};

export default TopTips;
