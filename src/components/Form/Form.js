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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;

    this.setState(() => {
      data.id += 1;
      data.commentsDatabase.push({
        id: data.id,
        firstName: data.firstName,
        comment: data.comment
      });
    });

    console.log(data.commentsDatabase);

    var newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("comment");
    var newNameH3 = document.createElement("h3");
    var newCommentP = document.createElement("p");
    var newName = document.createTextNode(data.firstName);
    var newComment = document.createTextNode(data.comment);
    newNameH3.appendChild(newName);
    newCommentP.appendChild(newComment);
    newCommentDiv.appendChild(newNameH3);
    newCommentDiv.appendChild(newCommentP);
    document.getElementById("commentSection").appendChild(newCommentDiv);

    this.setState({
      firstName: "",
      comment: ""
    });
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { firstName, comment } = this.state;
    return (
      <div>
        <h1>Form</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <p>
            Name:
            <input
              name="firstName"
              value={firstName}
              type="text"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            Comment:
            <textarea
              name="comment"
              value={comment}
              rows="4"
              cols="30"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Add comment</button>
          </p>
        </form>
        <div id="commentSection">
          <div className="comment">
            <h3>{this.state.commentsDatabase[0].firstName}</h3>
            <p>{this.state.commentsDatabase[0].comment}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
