import React from "react";
import MidTile1 from "./MidTiles/MidTile1.js";
import MidTile2 from "./MidTiles/MidTile2.js";
import MidTile3 from "./MidTiles/MidTile3.js";

class MidTiles extends React.Component {
  render() {
    return (
      <div class="midTiles">
        <MidTile1 />
        <MidTile2 />
        <MidTile3 />
      </div>
    );
  }
}

export default MidTiles;
