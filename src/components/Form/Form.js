import React from "react";
import FormDatabase from "./FormDatabase.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsDatabase: FormDatabase,
      firstName: "",
      comment: "",
      id: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    this.setState(
      prevState => {
        const newId = data.commentsDatabase.length;
        const newCommentsDatabase = prevState.commentsDatabase.map(
          item => item
        );
        newCommentsDatabase.push({
          firstName: data.firstName,
          comment: data.comment,
          id: newId
        });
        return {
          commentsDatabase: newCommentsDatabase,
          firstName: "",
          comment: "",
          id: null
        };
      },
      () => console.log(data.commentsDatabase)
    );
    this.createComment(data.firstName, data.comment);
    document.querySelector(".commentsTiles button").disabled = true;
    document.querySelector(".commentsTiles button").style.cursor = "no-drop";
    document.querySelector(".commentsTiles button").style.opacity = "0.4";
    // second way
    // let newcommentsDatabase = [
    //   ...data.commentsDatabase,
    //   { firstName: data.firstName, comment: data.comment, id: data.id + 1 }
    // ];
    // console.log(data);
    // this.setState({ commentsDatabase: newcommentsDatabase });
    // third way
    // data.commentsDatabase.push({
    //   id: data.id,
    //   firstName: data.firstName,
    //   comment: data.comment
    // });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (this.state.firstName && this.state.comment !== "") {
          document.querySelector(".commentsTiles button").disabled = false;
          document.querySelector(".commentsTiles button").style.cursor =
            "pointer";
          document.querySelector(".commentsTiles button").style.opacity = "1";
        } else {
          document.querySelector(".commentsTiles button").disabled = true;
          document.querySelector(".commentsTiles button").style.cursor =
            "no-drop";
          document.querySelector(".commentsTiles button").style.opacity = "0.4";
        }
      }
    );
  }

  createComment(name, comment) {
    const newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("comment");
    const newNameH3 = document.createElement("h3");
    const newName = document.createTextNode(name);
    const newCommentP = document.createElement("p");
    const newComment = document.createTextNode(comment);
    newNameH3.appendChild(newName);
    newCommentP.appendChild(newComment);
    newCommentDiv.appendChild(newNameH3);
    newCommentDiv.appendChild(newCommentP);
    const commentSection = document.getElementById("commentSection");
    commentSection.insertBefore(newCommentDiv, commentSection.childNodes[0]);
  }

  componentDidMount() {
    for (let i = 0; i < this.state.commentsDatabase.length; i++) {
      this.createComment(
        this.state.commentsDatabase[i].firstName,
        this.state.commentsDatabase[i].comment
      );
    }
  }

  render() {
    const { firstName, comment } = this.state;

    return (
      <div>
        <h1>Type in your name and comment below</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              name="firstName"
              value={firstName}
              type="text"
              placeholder="Your name"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <textarea
              name="comment"
              value={comment}
              rows="4"
              cols="40"
              placeholder="Comment..."
              onChange={this.handleChange}
            />
          </p>

          <button className="button" disabled>
            Add comment
          </button>
        </form>
        <div id="commentSection" />
      </div>
    );
  }
}

export default Form;
