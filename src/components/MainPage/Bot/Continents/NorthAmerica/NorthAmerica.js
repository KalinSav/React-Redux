import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Canada from "./Countries/Canada.js";
import USA from "./Countries/USA.js";
//import CountryTile from "../CountryTile.js";

class NorthAmerica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTiles: [
        {
          tileTitle: "Canada",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
          tileAlt: "Canada",
          navLink: `${this.props.location.pathname}/Canada`,
          component: Canada,
          tileId: 1
        },
        {
          tileTitle: "USA",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
          tileAlt: "USA",
          navLink: `${this.props.location.pathname}/USA`,
          component: USA,
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

export default NorthAmerica;
