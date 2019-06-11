import React from "react";
import { Route, HashRouter, NavLink } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Spain from "./Countries/Spain.js";
import France from "./Countries/France.js";
import NorthAmericaDatabase from "../NorthAmerica/NorthAmericaDatabase";
import AfricaDatabase from "../Africa/AfricaDatabase";

class Europe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NorthAmericaDatabase: NorthAmericaDatabase,
      AfricaDatabase: AfricaDatabase,
      showCountryTiles: true,
      countryTiles: [
        {
          tileTitle: "Spain",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
          tileAlt: "Spain",
          navLink: "/Europe/Spain",
          component: Spain,
          tileId: 1
        },
        {
          tileTitle: "France",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
          tileAlt: "France",
          navLink: "/Europe/France",
          component: France,
          tileId: 2
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(document.getElementsByClassName("countryTile"));
    document.getElementById("testt").style.display = "none";
  }

  componentDidMount() {
    console.log("TEST1");
  }

  render() {
    const routers = this.state.countryTiles.map(country => (
      <Route
        key={country.tileId}
        path={country.navLink}
        component={country.component}
      />
    ));
    const routersAfrica = this.state.AfricaDatabase.map(country => (
      <Route
        key={country.tileId}
        path={country.navLink}
        component={country.component}
      />
    ));
    return (
      <HashRouter>
        <div id="testt">
          <CountryTile state={this.state} onClick={this.handleClick} />
          <NavLink to="/NorthAmerica">NAM</NavLink>
        </div>

        <div>
          {routers} <br />
          {routersAfrica}
          <Route
            path={this.state.NorthAmericaDatabase[0].navLink}
            component={this.state.NorthAmericaDatabase[0]}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Europe;
