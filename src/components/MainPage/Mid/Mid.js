import React from "react";
import MidBanner from "./MidBanner.js";
import MidTiles from "./MidTiles";

class Mid extends React.Component {
  render() {
    return (
      <section>
        <MidBanner />
        <MidTiles />
      </section>
    );
  }
}

export default Mid;
