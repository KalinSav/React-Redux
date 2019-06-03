import React from "react";

const CommentsTile = ({ commentTiles }) => {
  const commentTilesList = commentTiles.map(commentTile => {
    return (
      <div className="commentTile">
        <h4>{commentTile.tileTitle}</h4>
        <p>{commentTile.tileText}</p>
      </div>
    );
  });
  return <div>{commentTilesList}</div>;
};

export default CommentsTile;
