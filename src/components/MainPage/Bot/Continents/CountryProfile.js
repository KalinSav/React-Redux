import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount() {
    // This runs when you've clicked on a country tile and the country profile mounts. It hides the country tiles.
    const listOfCountryTiles = document.getElementById("listOfCountryTiles");
    if (listOfCountryTiles.style.display !== "none") {
      listOfCountryTiles.style.display = "none";
    }
  }
};

const test = () => {
  console.log("test");
  document.querySelector("#countryProfile p").style.display = "none";
};

const CountryProfile = props => {
  const navLinks = props.state.data.map(button => (
    <li key={button.title}>
      <NavLink to={button.navLink} replace>
        {button.title}
      </NavLink>
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
      <div id="countryProfile">
        <div className="buttonsMenu">
          <h1>{props.state.countryName}</h1>
          <ul className="countryProfileMenu" onClick={() => test()}>
            {navLinks}
          </ul>
        </div>
        <div className="countryProfileContent">{routers}</div>
        <p>Hello</p>
      </div>
    </HashRouter>
  );
};

export default lifecycle(methods)(CountryProfile);
