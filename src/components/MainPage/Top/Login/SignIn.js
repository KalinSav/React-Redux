import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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

  toggleClass = () => {
    console.log("wtst");
    document.querySelector(".signIn").classList.toggle("transition");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signInWrapper">
            <div className="signIn">
              <label htmlFor="email">Email</label>
              <input
                className="loginField"
                type="email"
                id="email"
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                className="loginField"
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <p class="signInButton" onMouseEnter={() => this.toggleClass()}>
            Sign In
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
