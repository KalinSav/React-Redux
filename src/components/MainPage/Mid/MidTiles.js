import React from "react";
import MidTile from "./MidTile.js";

class MidTiles extends React.Component {
  state = {
    midTiles: [
      {
        tileTitle: "Project Summary",
        buttonText: "Find out more",
        tileId: 1
      },
      {
        tileTitle: "Top 10 Tips",
        buttonText: "Find out more",
        tileId: 2
      },
      {
        tileTitle: "Key Issues",
        buttonText: "Find out more",
        tileId: 3
      }
    ]
  };
  render() {
    return (
      <section className="midTiles">
        <MidTile midTiles={this.state.midTiles} />
      </section>
    );
  }
}

export default MidTiles;
