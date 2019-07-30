import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInUsername: "",
      signInPassword: ""
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

  toggleCredentials = () => {
    document.querySelector(".signIn").classList.toggle("transition");
    document.querySelector(".signInButton").style.display = "none";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signInWrapper">
            <div className="signIn">
              {/* <label htmlFor="signInUsername">Email</label> */}
              <input
                className="loginField"
                type="text"
                id="signInUsername"
                onChange={this.handleChange}
                placeholder="Username"
              />
              {/* <label htmlFor="signInPassword">Password</label> */}
              <input
                className="loginField"
                type="password"
                id="signInPassword"
                onChange={this.handleChange}
                placeholder="Password"
              />
              <button>Submit</button>
            </div>
          </div>
          <p className="signInButton" onClick={() => this.toggleCredentials()}>
            Sign In
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
