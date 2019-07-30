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
    this.setState(prevState => {
      const newId = data.commentsDatabase.length;
      const newCommentsDatabase = prevState.commentsDatabase.map(item => item);
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
    });
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
    //  e.target.addEventListener("keyup" , () => e.target.value = e.target.value.replace(/[&*<>]/g, ''))
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        const formErrorMsg = document.getElementById("formErrorMsg");
        const commentsTilesButton = document.querySelector(
          ".commentsTiles button"
        );

        if (
          // Error message only shown between 1 and 3 characters in the name input
          this.state.firstName.length === 0 ||
          this.state.firstName.length >= 3
        ) {
          formErrorMsg.style.visibility = "hidden";
        } else {
          formErrorMsg.style.visibility = "visible";
        }

        if (
          // If the values entered into the fields are more than 3 characters
          this.state.firstName.length >= 3 &&
          this.state.comment.length
        ) {
          commentsTilesButton.disabled = false;
          commentsTilesButton.style.cursor = "pointer";
          commentsTilesButton.style.opacity = "1";
        } else {
          // if the values entered into the fields are less than 3 characters
          commentsTilesButton.disabled = true;
          commentsTilesButton.style.cursor = "no-drop";
          commentsTilesButton.style.opacity = "0.4";
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
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              name="firstName"
              value={firstName}
              type="text"
              autoComplete="off"
              pattern="[a-zA-Z\s]{3,}"
              title="Only letters and spaces allowed"
              className="inputBox"
              placeholder="Your name"
              onChange={this.handleChange}
            />
          </p>
          <p id="formErrorMsg">
            Input field must be at least 3 characters long.
          </p>
          <p>
            <textarea
              name="comment"
              value={comment}
              rows="3"
              cols="30"
              className="inputBox"
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
