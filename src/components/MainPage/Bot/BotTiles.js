import React from "react";
import BotTile from "./BotTile.js";
import { Route, NavLink, HashRouter } from "react-router-dom";
import NorthAmerica from "./Continents/NorthAmerica/NorthAmerica.js";
import Europe from "./Continents/Europe/Europe.js";

class BotTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBotTiles: true,
      botTiles: [
        {
          tileTitle: "North America",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/North_america_blank_range_map.png",
          tileAlt: "North America",
          navLink: "/NorthAmerica",
          tileId: 1
        },
        {
          tileTitle: "Europe",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Europe_blank_map.png/655px-Europe_blank_map.png",
          tileAlt: "Europe",
          navLink: "/Europe",
          tileId: 2
        },
        {
          tileTitle: "Asia & ME",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/BlankMap-Asia.png",
          tileAlt: "Asia and Middle East",
          tileId: 3
        },
        {
          tileTitle: "South America",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/BlankMap-South-America.png/400px-BlankMap-South-America.png",
          tileAlt: "South America",
          tileId: 4
        },
        {
          tileTitle: "Africa",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/BlankMap-Africa.svg",
          tileAlt: "Africa",
          tileId: 5
        },
        {
          tileTitle: "Australia & NZ",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/5/55/Map_of_Australia_and_New_Zealand.png",
          tileAlt: "Australia and New Zealand",
          tileId: 6
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
    if (this.state.showBotTiles === true) {
      this.setState({ showBotTiles: false });
    } else {
      this.setState({ showBotTiles: true });
    }
    console.log(this.state);
  }

  render() {
    return (
      <HashRouter>
        <section>
          <div
            className="botTiles"
            style={{ display: this.state.showBotTiles ? null : "none" }}
          >
            <BotTile state={this.state} onClick={this.handleClick} />
          </div>
          <div
            className="botTiles"
            style={{ display: this.state.showBotTiles ? "none" : null }}
          >
            <button className="backButton" onClick={this.handleClick}>
              Back
            </button>
            <Route path="/NorthAmerica" component={NorthAmerica} />
            <Route path="/Europe" component={Europe} />
          </div>
        </section>
      </HashRouter>
    );
  }
}

export default BotTiles;
