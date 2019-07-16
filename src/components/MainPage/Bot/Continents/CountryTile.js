import React from "react";
import { NavLink, HashRouter } from "react-router-dom";

import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount() {
    // document.querySelector(".countryTilee").className = "countryTile"
    // const countryTile = document.getElementById("countryTile");
    // if (countryTile.style.display !== "inline-block") {
    //   countryTile.style.display = "inline-block";
    //   console.log("display inline-block");
    // }
    //   console.log("display inline");
  }
};

const CountryTile = props => {
  const alphabetisedCountryTiles = props.state.countryTiles.sort(function(
    a,
    b
  ) {
    const countryNameA = a.tileTitle.toUpperCase();
    const countryNameB = b.tileTitle.toUpperCase();
    return countryNameA < countryNameB
      ? -1
      : countryNameA > countryNameB
      ? 1
      : 0;
  });

  const countryTilesList = alphabetisedCountryTiles.map(countryTile => {
    return (
      <NavLink to={countryTile.navLink} key={countryTile.tileId}>
        <div className="countryTile">
          <h3>{countryTile.tileTitle}</h3>
          <img src={countryTile.tileImgSrc} alt={countryTile.tileAlt} />
        </div>
      </NavLink>
    );
  });

  return <HashRouter>{countryTilesList}</HashRouter>;
};

export default lifecycle(methods)(CountryTile);
