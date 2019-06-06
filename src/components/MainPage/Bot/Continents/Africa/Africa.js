import React from "react";
import CountryTile from "../CountryTile.js";

class Africa extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "Egypt",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 1
      },
      {
        tileTitle: "Nigeria",
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

export default Africa;
