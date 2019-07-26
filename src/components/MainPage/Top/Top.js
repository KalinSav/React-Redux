import React from "react";
import TopBanner from "./TopBanner.js";
import TopText from "./TopText";

class Top extends React.Component {
  render() {
    return (
      <header>
        <TopBanner />
        <TopText />
      </header>
    );
  }
}

export default Top;
