import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Spain from "./Countries/Spain.js";
import France from "./Countries/France.js";

class Europe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTiles: [
        {
          tileTitle: "Spain",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
          tileAlt: "Spain",
          navLink: `${this.props.location.pathname}/Spain`,
          component: Spain,
          tileId: 1
        },
        {
          tileTitle: "France",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
          tileAlt: "France",
          navLink: `${this.props.location.pathname}/France`,
          component: France,
          tileId: 2
        }
      ]
    };
  }

  componentDidMount() {}

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
        <div id="countryTile">
          <CountryTile state={this.state} />
        </div>
        <div>{routers}</div>
      </HashRouter>
    );
  }
}

export default Europe;
