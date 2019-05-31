import React from "react";

class BotTile extends React.Component {
  render() {
    const { botTiles } = this.props;
    const botTilesList = botTiles.map(botTile => {
      return (
        <div className="botTile" key={botTile.tileId}>
          <h2>{botTile.tileTitle}</h2>
          <img src={botTile.tileImgSrc} alt={botTile.tileAlt} />
        </div>
      );
    });
    return <div>{botTilesList}</div>;
  }
}

export default BotTile;
