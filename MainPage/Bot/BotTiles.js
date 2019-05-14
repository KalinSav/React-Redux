import React from "react";
import BotTile1 from "./BotTiles/BotTile1.js";
import BotTile2 from "./BotTiles/BotTile2.js";
import BotTile3 from "./BotTiles/BotTile3.js";
import BotTile4 from "./BotTiles/BotTile4.js";
import BotTile5 from "./BotTiles/BotTile5.js";
import BotTile6 from "./BotTiles/BotTile6.js";

class BotTiles extends React.Component {
  render() {
    return (
      <div className="botTiles">
        <BotTile1 />
        <BotTile2 />
        <BotTile3 />
        <BotTile4 />
        <BotTile5 />
        <BotTile6 />
      </div>
    );
  }
}

export default BotTiles;
