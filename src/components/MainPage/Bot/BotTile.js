import React from "react";
import { NavLink, HashRouter } from "react-router-dom";

const BotTile = props => {
  const botTilesList = props.state.botTiles.map(botTile => {
    return (
      <HashRouter key={botTile.tileId}>
        <NavLink to={botTile.navLink} onClick={props.onClick}>
          <div className="botTile">
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
