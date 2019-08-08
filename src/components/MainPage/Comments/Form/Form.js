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
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  createComment(e) {
    e.preventDefault();
    const data = this.state;
    this.setState(prevState => {
      const commentsTilesButton = document.querySelector(
        ".commentsTiles button"
      );
      commentsTilesButton.className = "button commentButtonDisabled";
      commentsTilesButton.disabled = true;
      const newId =
        data.commentsDatabase[data.commentsDatabase.length - 1].id + 1;
      if (data.commentsDatabase.length) {
      }
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
          commentsTilesButton.className = "button commentButtonEnabled";
          commentsTilesButton.disabled = false;
        } else {
          // if the values entered into the fields are less than 3 characters
          commentsTilesButton.className = "button commentButtonDisabled";
          commentsTilesButton.disabled = true;
        }
      }
    );
  }

  deleteComment(e) {
    const targetComment = this.state.commentsDatabase.find(item => {
      return item.comment === e.target.parentNode.childNodes[2].innerHTML;
    });
    this.setState(prevState => {
      const newCommentsDatabase = prevState.commentsDatabase.filter(item => {
        return item.id !== targetComment.id;
      });
      return {
        commentsDatabase: newCommentsDatabase
      };
    });
  }

  render() {
    const { firstName, comment } = this.state;
    const renderComments = this.state.commentsDatabase.map(item => {
      return (
        <div className="comment" key={item.id}>
          <span className="deleteComment" onClick={e => this.deleteComment(e)}>
            delete
          </span>
          <h3>{item.firstName}</h3>
          <p>{item.comment}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Type in your name and comment below</h1>
        <form onSubmit={this.createComment}>
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

          <button className="button commentButtonDisabled" disabled>
            Add comment
          </button>
        </form>
        <div id="commentSection">{renderComments.reverse()}</div>
      </div>
    );
  }
}

export default Form;
