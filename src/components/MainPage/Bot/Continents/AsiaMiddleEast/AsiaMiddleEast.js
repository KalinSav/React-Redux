import React from "react";
import CountryTile from "../CountryTile.js";

class AsiaMiddleEast extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "China",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 1
      },
      {
        tileTitle: "Dubai",
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

export default AsiaMiddleEast;
