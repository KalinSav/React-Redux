import React from "react";
import CommentsBanner from "./CommentsBanner.js";
import CommentsTiles from "./CommentsTiles";

class Comments extends React.Component {
  render() {
    return (
      <section>
        <CommentsBanner />
        <CommentsTiles />
      </section>
    );
  }
}

export default Comments;
