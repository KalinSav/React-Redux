import React from "react";
import BotBanner from "./BotBanner.js";
import BotTiles from "./BotTiles";
import { HashRouter, Route } from "react-router-dom";
import Countries from "./Continents/Countries";

class Bot extends React.Component {
  constructor() {
    super();
    this.countries = Countries;
  }

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
      <HashRouter>
        <section onMouseUp={e => this.onMouseUp(e)}>
          <BotBanner />
          <BotTiles />
        </section>
        <Route
          path="/Europe/Spain/keyFacts"
          component={this.countries[3].component}
        />
      </HashRouter>
    );
  }
}

export default Bot;
