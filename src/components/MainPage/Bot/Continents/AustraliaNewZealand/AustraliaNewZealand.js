import React from "react";
import CountryTile from "../CountryTile.js";

class AustraliaNewZealand extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "Australia",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Canada_blank_map.svg",
        tileAlt: "Canada",
        tileId: 1
      },
      {
        tileTitle: "New Zealand",
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

export default AustraliaNewZealand;
