import React from "react";
import TopBanner from "./TopBanner.js";
import TopText from "./TopText";

class Top extends React.Component {
  render() {
    return (
      <div>
        <TopBanner />
        <TopText />
      </div>
    );
  }
}

export default Top;
