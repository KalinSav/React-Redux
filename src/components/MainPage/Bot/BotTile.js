import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

const BotTile = ({ botTiles }) => {
  const botTilesList = botTiles.map(botTile => {
    return (
      <div className="botTile" key={botTile.tileId}>
        <HashRouter>
          <NavLink to={botTile.navLink}>
            <h2>{botTile.tileTitle}</h2>
            <img src={botTile.tileImgSrc} alt={botTile.tileAlt} />
          </NavLink>
        </HashRouter>
      </div>
    );
  });
  return <div>{botTilesList}</div>;
};

export default BotTile;
