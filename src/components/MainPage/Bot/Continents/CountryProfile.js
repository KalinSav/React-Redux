import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount() {
    const countryTile = document.getElementById("countryTile");
    if (countryTile.style.display !== "none") {
      countryTile.style.display = "none";
    }
  }
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
      <div className="buttonsMenu">
        <h1>{props.state.countryName}</h1>
        <ul className="countryProfileMenu">{navLinks}</ul>
      </div>
      <div className="countryProfileContent">{routers}</div>
    </HashRouter>
  );
};

export default lifecycle(methods)(CountryProfile);
