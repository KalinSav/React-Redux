import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Australia from "./Countries/Australia.js";
import NewZealand from "./Countries/NewZealand.js";

class AustraliaNewZealand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTiles: [
        {
          tileTitle: "Australia",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
          tileAlt: "Australia",
          navLink: `${this.props.location.pathname}/Australia`,
          component: Australia,
          tileId: 1
        },
        {
          tileTitle: "N. Zealand",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
          tileAlt: "New Zealand",
          navLink: `${this.props.location.pathname}/NewZealand`,
          component: NewZealand,
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
        <div id="listOfCountryTiles">
          <CountryTile state={this.state} />
        </div>
        <div>{routers}</div>
      </HashRouter>
    );
  }
}

export default AustraliaNewZealand;
