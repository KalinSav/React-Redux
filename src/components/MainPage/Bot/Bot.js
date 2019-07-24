import React from "react";
import BotBanner from "./BotBanner.js";
import BotTiles from "./BotTiles";

class Bot extends React.Component {
  onMouseUp(e) {
    const searchSuggestions = document.querySelector(".searchSuggestions");
    if (
      searchSuggestions &&
      e.target.parentElement.firstChild.type !== "text"
    ) {
      searchSuggestions.style.visibility = "hidden";
    }
  }
  render() {
    return (
      <section onMouseUp={e => this.onMouseUp(e)}>
        <BotBanner />
        <BotTiles />
      </section>
    );
  }
}

export default Bot;
