import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import BotTile from "./BotTile.js";
import NorthAmerica from "./Continents/NorthAmerica/NorthAmerica.js";
import Europe from "./Continents/Europe/Europe.js";
import AsiaMiddleEast from "./Continents/AsiaMiddleEast/AsiaMiddleEast.js";
import SouthAmerica from "./Continents/SouthAmerica/SouthAmerica.js";
import Africa from "./Continents/Africa/Africa.js";
import AustraliaNewZealand from "./Continents/AustraliaNewZealand/AustraliaNewZealand.js";
import Countries from "./Continents/Countries";

class BotTiles extends React.Component {
  constructor(props) {
    super(props);
    this.countries = Countries;
    this.state = {
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
  }

  render() {
    const routes = this.state.botTiles.map(continent => (
      <Route
        key={continent.tileId}
        path={continent.navLink}
        component={continent.component}
      />
    ));

    return (
      <HashRouter>
        <section className="botTiles">
          <Route path="/" exact render={() => <BotTile state={this.state} />} />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={300}
                  classNames="positionAbsolute fade"
                  exit={false}
                >
                  <Switch location={location}>{routes}</Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </section>
      </HashRouter>
    );
  }
}

export default BotTiles;
