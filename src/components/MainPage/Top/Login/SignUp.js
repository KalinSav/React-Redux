import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signUpModal">
            <div className="modalContent">
              <span className="closeBtn">&times;</span>
              <h3>Sign Up</h3>
              <div className="inputField">
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputField">
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input type="text" id="lastName" onChange={this.handleChange} />
              </div>
              <div className="inputField">
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="inputField">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputField">
                <button className="button">Sign Up</button>
              </div>
            </div>
          </div>
          <p className="signUpButton ">Sign Up</p>
        </form>
      </div>
    );
  }
}

export default SignUp;
