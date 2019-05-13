import React from "react";
import MidBanner from "./MidBanner.js";
import MidTiles from "./MidTiles";

class Mid extends React.Component {
  render() {
    return (
      <div>
        <MidBanner />
        <MidTiles />
      </div>
    );
  }
}

export default Mid;
