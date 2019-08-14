import React from "react";
import { Route, HashRouter } from "react-router-dom";

const KeyIssues = () => {
  return (
    <HashRouter>
      <Route path="/keyissues" exact render={() => <div>Test</div>} />
    </HashRouter>
  );
};

export default KeyIssues;
