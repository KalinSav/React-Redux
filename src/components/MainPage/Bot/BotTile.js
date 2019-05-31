import React from "react";

const BotTile = ({ botTiles }) => {
  const botTilesList = botTiles.map(botTile => {
    return (
      <div className="botTile" key={botTile.tileId}>
        <h2>{botTile.tileTitle}</h2>
        <img src={botTile.tileImgSrc} alt={botTile.tileAlt} />
      </div>
    );
  });
  return <div>{botTilesList}</div>;
};

export default BotTile;
