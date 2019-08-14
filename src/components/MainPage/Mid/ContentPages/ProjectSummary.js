import React from "react";
import { Route, HashRouter } from "react-router-dom";

const ProjectSummary = () => {
  return (
    <HashRouter>
      <Route path="/projectsummary" render={() => <div>Test</div>} />
    </HashRouter>
  );
};

export default ProjectSummary;
