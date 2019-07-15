import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount() {
    console.log("componentDidMount in CountryProfile");
    // This runs when you've clicked on a country tile and the country profile mounts. It hides the country tiles.
    // const listOfCountryTiles = document.getElementById("listOfCountryTiles");
    // if (listOfCountryTiles.style.display !== "none") {
    //   listOfCountryTiles.style.display = "none";
    // }
  },

  componentWillUnmount() {
    // This is for when you click the browser BACK button when you are on a countryProfile screen. It makes the country tiles visible again
    if (document.getElementById("listOfCountryTiles")) {
      document.getElementById("listOfCountryTiles").removeAttribute("style");
    }
  }
};

const CountryProfile = props => {
  const navLinks = props.state.data.map(button => (
    <li key={button.title}>
      <NavLink to={button.navLink}>{button.title}</NavLink>
    </li>
  ));
  const routers = props.state.data.map(contentPiece => (
    <Route
      key={contentPiece.title}
      path={contentPiece.navLink}
      component={contentPiece.content}
    />
  ));
  return (
    <HashRouter>
      <div className="countryProfile">
        <div className="buttonsMenu">
          <h2>{props.state.countryName}</h2>
          <ul className="countryProfileMenu">{navLinks}</ul>
        </div>
        <div className="countryProfileContent">{routers}</div>
      </div>
    </HashRouter>
  );
};

export default lifecycle(methods)(CountryProfile);
