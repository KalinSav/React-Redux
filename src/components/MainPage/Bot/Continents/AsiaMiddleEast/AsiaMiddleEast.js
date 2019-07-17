import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import China from "./Countries/China.js";
import Indonesia from "./Countries/Indonesia.js";
import Jordan from "./Countries/Jordan.js";

class AsiaMiddleEast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continent: "Asia and Middle East",
      countryTiles: [
        {
          tileTitle: "China",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
          tileAlt: "China",
          navLink: "/AsiaMiddleEast/China",
          component: China,
          tileId: 1
        },
        {
          tileTitle: "Indonesia",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
          tileAlt: "Indonesia",
          navLink: "/AsiaMiddleEast/Indonesia",
          component: Indonesia,
          tileId: 2
        },
        {
          tileTitle: "Jordan",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
          tileAlt: "Jordan",
          navLink: "/AsiaMiddleEast/Jordan",
          component: Jordan,
          tileId: 3
        }
      ]
    };
  }

  render() {
    const routers = this.state.countryTiles.map(country => (
      <Route
        key={country.tileId}
        path={country.navLink}
        component={country.component}
      />
    ));
    return (
      <HashRouter>
        <Route
          path="/AsiaMiddleEast"
          exact
          render={() => <CountryTile state={this.state} />}
        />
        {routers}
      </HashRouter>
    );
  }
}

export default AsiaMiddleEast;
