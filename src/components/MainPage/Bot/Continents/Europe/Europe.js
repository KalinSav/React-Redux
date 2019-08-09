import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Spain from "./Countries/Spain.js";
import France from "./Countries/France.js";
import Countries from "../Countries";

class Europe extends React.Component {
  constructor(props) {
    super(props);
    this.countries = Countries;
    this.state = {
      continent: "Europe",
      countryTiles: [
        {
          tileTitle: "Spain",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
          tileAlt: "Spain",
          navLink: `/Europe/Spain`,
          component: Spain,
          tileId: 1
        },
        {
          tileTitle: "France",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
          tileAlt: "France",
          navLink: `/Europe/France`,
          component: France,
          tileId: 2
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
          path="/Europe"
          exact
          render={() => <CountryTile state={this.state} />}
        />
        {routers}
      </HashRouter>
    );
  }
}

export default Europe;
