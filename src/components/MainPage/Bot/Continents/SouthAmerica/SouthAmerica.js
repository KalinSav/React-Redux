import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Argentina from "./Countries/Argentina.js";
import Brazil from "./Countries/Brazil.js";
import Colombia from "./Countries/Colombia.js";
import Venezuela from "./Countries/Venezuela.js";

class SouthAmerica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTiles: [
        {
          tileTitle: "Venezuela",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Venezuela_%28state%29.svg",
          tileAlt: "Venezuela",
          navLink: `${this.props.location.pathname}/Venezuela`,
          component: Venezuela,
          tileId: 1
        },
        {
          tileTitle: "Colombia",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
          tileAlt: "Colombia",
          navLink: `${this.props.location.pathname}/Colombia`,
          component: Colombia,
          tileId: 2
        },
        {
          tileTitle: "Argentina",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
          tileAlt: "Argentina",
          navLink: `${this.props.location.pathname}/Argentina`,
          component: Argentina,
          tileId: 3
        },
        {
          tileTitle: "Brazil",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
          tileAlt: "Brazil",
          navLink: `${this.props.location.pathname}/Brazil`,
          component: Brazil,
          tileId: 4
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

export default SouthAmerica;
