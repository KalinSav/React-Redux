import React from "react";
import FormDatabase from "./FormDatabase.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pushit: FormDatabase,
      firstName: "",
      comment: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    console.log(data);
    console.log(this.state.pushit);
    this.setState(prevState => {
      const pushdata = prevState.pushit.map(item => {
        item = this.state.firstName;
        return item;
      });
      return pushdata;
    });
    console.log(this.state.pushit);
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
      </div>
    );
  }
}

export default Form;
