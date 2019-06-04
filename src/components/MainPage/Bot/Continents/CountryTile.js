import React from "react";

const CountryTile = ({ countryTiles }) => {
  const countryTilesList = countryTiles.map(countryTile => {
    return (
      <div className="countryTile" key={countryTile.tileId}>
        <h2>{countryTile.tileTitle}</h2>
        <img src={countryTile.tileImgSrc} alt={countryTile.tileAlt} />
      </div>
    );
  });
  return <div>{countryTilesList}</div>;
};

export default CountryTile;
