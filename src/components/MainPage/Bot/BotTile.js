import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

const BotTile = props => {
  const botTilesList = props.state.botTiles.map(botTile => {
    return (
      <HashRouter>
        <NavLink
          to={botTile.navLink}
          style={{
            textDecoration: "none",
            color: "black"
          }}
          onClick={props.onClick}
          replace
        >
          <div className="botTile" key={botTile.tileId}>
            <h2>{botTile.tileTitle}</h2>
            <img src={botTile.tileImgSrc} alt={botTile.tileAlt} />
          </div>
        </NavLink>
      </HashRouter>
    );
  });
  return <div>{botTilesList}</div>;
};

export default BotTile;
