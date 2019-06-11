import React from "react";
import CountryTile from "../CountryTile.js";

class Europe extends React.Component {
  state = {
    countryTiles: [
      {
        tileTitle: "Spain",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        tileAlt: "Spain",
        tileId: 1
      },
      {
        tileTitle: "France",
        tileImgSrc:
          "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        tileAlt: "France",
        tileId: 2
      }
    ]
  };

  render() {
    const alphabetisedCountryTiles = this.state.countryTiles.sort(function(
      a,
      b
    ) {
      const countryNameA = a.tileTitle.toUpperCase();
      const countryNameB = b.tileTitle.toUpperCase();
      return countryNameA < countryNameB
        ? -1
        : countryNameA > countryNameB
        ? 1
        : 0;
    });
    return <CountryTile countryTiles={alphabetisedCountryTiles} />;
  }
}

export default Europe;
