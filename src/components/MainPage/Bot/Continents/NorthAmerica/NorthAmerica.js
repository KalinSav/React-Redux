import React from "react";
import CountryTile from "../CountryTile.js";

class NorthAmerica extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "Canada",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 1
      },
      {
        tileTitle: "USA",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 2
      }
    ]
  };

  render() {
    return <CountryTile countryTiles={this.state.countryTiles} />;
  }
}

export default NorthAmerica;
