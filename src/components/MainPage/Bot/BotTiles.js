import React from "react";
import BotTile from "./BotTile.js";
import { Route, HashRouter } from "react-router-dom";
import BotSearchBar from "./BotSearchBar";
import NorthAmerica from "./Continents/NorthAmerica/NorthAmerica.js";
import Europe from "./Continents/Europe/Europe.js";
import AsiaMiddleEast from "./Continents/AsiaMiddleEast/AsiaMiddleEast.js";
import SouthAmerica from "./Continents/SouthAmerica/SouthAmerica.js";
import Africa from "./Continents/Africa/Africa.js";
import AustraliaNewZealand from "./Continents/AustraliaNewZealand/AustraliaNewZealand.js";

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
          component: NorthAmerica,
          tileId: 1
        },
        {
          tileTitle: "Europe",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Europe_blank_map.png/655px-Europe_blank_map.png",
          tileAlt: "Europe",
          navLink: "/Europe",
          component: Europe,
          tileId: 2
        },
        {
          tileTitle: "Asia & ME",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/BlankMap-Asia.png",
          tileAlt: "Asia and Middle East",
          navLink: "/AsiaMiddleEast",
          component: AsiaMiddleEast,
          tileId: 3
        },
        {
          tileTitle: "South America",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/BlankMap-South-America.png/400px-BlankMap-South-America.png",
          tileAlt: "South America",
          navLink: "/SouthAmerica",
          component: SouthAmerica,
          tileId: 4
        },
        {
          tileTitle: "Africa",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/BlankMap-Africa.svg",
          tileAlt: "Africa",
          navLink: "/Africa",
          component: Africa,
          tileId: 5
        },
        {
          tileTitle: "Australia & NZ",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/5/55/Map_of_Australia_and_New_Zealand.png",
          tileAlt: "Australia and New Zealand",
          navLink: "/AustraliaNewZealand",
          component: AustraliaNewZealand,
          tileId: 6
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.test = this.test.bind(this);
  }

  test() {
    console.log(this.state.botTiles[0].tileTitle);
  }
  handleClick() {
    const listOfCountryTiles = document.getElementById("listOfCountryTiles");
    const countryProfile = document.getElementById("countryProfile");
    // This takes you to the tiles of countries of the continent you've selected
    if (this.state.showBotTiles === true) {
      this.setState({ showBotTiles: false });
    }
    // This takes you from the tiles of countries up to the main view with all continents (when you press the Back button)
    if (
      this.state.showBotTiles === false &&
      listOfCountryTiles.style.display !== "none"
    ) {
      this.setState({ showBotTiles: true });
    }
    // This takes you from the profile of the country you've selected up to the tiles of countries (when you press the Back button)
    if (
      this.state.showBotTiles === false &&
      listOfCountryTiles.style.display === "none"
    ) {
      countryProfile.style.display = "none";
      listOfCountryTiles.style.display = "";
    }
  }

  render() {
    const visible = {
      visibility: "visible",
      opacity: 1,
      transition: "opacity 0.4s 0.15s, height 0.3s ease-out"
    };

    const invisible = {
      padding: 0,
      height: "0px",
      visibility: "hidden",
      opacity: 0,
      transition: "opacity 0.4s, height 0.3s ease-out"
    };

    const routers = this.state.botTiles.map(continent => (
      <Route
        key={continent.tileId}
        path={continent.navLink}
        component={continent.component}
      />
    ));

    return (
      <HashRouter>
        <section>
          <input type="text" onChange={() => this.test()} />

          <div
            className="botTiles"
            style={this.state.showBotTiles ? visible : invisible}
          >
            <BotSearchBar
              lala={this.state.botTiles}
              onClick={() => this.handleClick()}
            />
            <BotTile state={this.state} onClick={() => this.handleClick()} />
          </div>
          <div
            className="botTiles"
            style={this.state.showBotTiles ? invisible : visible}
          >
            <button className="button" onClick={this.handleClick}>
              Back
            </button>
            <div className="countryTiles">{routers}</div>
          </div>
        </section>
      </HashRouter>
    );
  }
}

export default BotTiles;
