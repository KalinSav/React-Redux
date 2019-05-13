import React from "react";
import BotBanner from "./BotBanner.js";
import BotTiles from "./BotTiles";

class Bot extends React.Component {
  render() {
    return (
      <div>
        <BotBanner />
        <BotTiles />
      </div>
    );
  }
}

export default Bot;
