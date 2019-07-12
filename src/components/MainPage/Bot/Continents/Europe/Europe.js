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

  componentDidMount() {
    // This shoukld make "countryTile"s appear when user clicks the browser Forward button. Would be better if instead handleClick in BotTiles was activated
    // console.log("mount")
    // document.getElementsByClassName("botTiles")[0].style.visibility = "hidden"
    // document.getElementsByClassName("botTiles")[0].style.opacity = 0
    // document.getElementsByClassName("botTiles")[1].style.visibility = "visible"
  }

  componentDidUpdate() {
    // This is for when you click the browser BACK button when you are on a countryProfile screen. It makes the country tiles visible again
    const listOfCountryTiles = document.getElementById("listOfCountryTiles");
    const countryProfileButton = document.querySelector(
      "#countryProfile .countryProfileContent"
    );
    if (
      listOfCountryTiles &&
      (countryProfileButton && countryProfileButton.firstChild === false)
    ) {
      console.log("this (Europe)");
      document.getElementById("listOfCountryTiles").removeAttribute("style");
    }
  }

  componentWillUnmount() {
    // It is possible to make "botTile"s appear if there's a way to change the state showBotTiles to TRUE in BotTiles.js
    // console.log("unmounted")
    // document.getElementsByClassName("botTiles")[0].style.visibility = "visible"
    // document.getElementsByClassName("botTiles")[0].style.opacity = 1
    // document.getElementsByClassName("botTiles")[1].style.visibility = "hidden"
    // window.location.href = "#/";
  }

  render() {
    // It is possible to get your data for countries from Countries.js and this is how to show them in a continent
    // const countriesInEurope = this.countries.filter(country => {
    //   if (country.continent === "Europe") {
    //     return country;
    //   }
    // return null
    // });
    // const routers = lala.map(country => (
    //   <Route
    //     key={country.tileId}
    //     path={country.navLink}
    //     component={country.component}
    //   />
    // ));

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

export default Europe;
