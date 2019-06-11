import React from "react";
import CountryTile from "../CountryTile.js";

class SouthAmerica extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "Venezuela",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 1
      },
      {
        tileTitle: "Colombia",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 2
      }
    ]
  };

  render() {
    return <CountryTile state={this.state} />;
  }
}

export default SouthAmerica;
