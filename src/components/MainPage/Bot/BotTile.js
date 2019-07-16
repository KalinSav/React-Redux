import React from "react";
import { NavLink, HashRouter } from "react-router-dom";
import BotSearchBar from "./BotSearchBar";

const BotTile = props => {
  const botTiles = props.state.botTiles.map(botTile => {
    return (
      <NavLink to={botTile.navLink} key={botTile.tileId}>
        <div className="botTile">
          <h2>{botTile.tileTitle}</h2>
          <img src={botTile.tileImgSrc} alt={botTile.tileAlt} />
        </div>
      </NavLink>
    );
  });

  return (
    <HashRouter>
      <BotSearchBar botTiles={props.state.botTiles} />
      {botTiles}
    </HashRouter>
  );
};

export default BotTile;
