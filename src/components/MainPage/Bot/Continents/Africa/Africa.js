import React from "react";
import CountryTile from "../CountryTile.js";

class Africa extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "Ghana",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
        tileAlt: "Ghana",
        navLink: "/Ghana",
        tileId: 1
      },
      {
        tileTitle: "Nigeria",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
        tileAlt: "Nigeria",
        navLink: "/Nigeria",
        tileId: 2
      },
      {
        tileTitle: "Ivory Coast",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg",
        tileAlt: "Ivory Coast",
        navLink: "/IvoryCoast",
        tileId: 3
      }
    ]
  };

  render() {
    return <CountryTile state={this.state} onClick={this.handleClick} />;
  }
}

export default Africa;
