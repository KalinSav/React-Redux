import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/authActions";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleSignIn: true,
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
    const state = this.state;
    const auth = this.props.auth;
    const creds = { state, auth };
    e.preventDefault();
    this.props.signIn(creds);
  };

  toggleCredentials = () => {
    const signIn = document.querySelector(".signIn");
    if (this.state.toggleSignIn) {
      signIn.classList.add("transition");
      this.setState(prevState => ({
        toggleSignIn: !prevState.toggleSignIn
      }));
    } else {
      this.setState(prevState => ({
        toggleSignIn: !prevState.toggleSignIn
      }));
      signIn.classList.remove("transition");
    }
  };

  componentDidMount() {
    document.querySelector(".topBanner").addEventListener("click", () => {
      if (!this.state.toggleSignIn) {
        this.toggleCredentials();
      }
    });
  }

  render() {
    const { authError } = this.props.auth;
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
            </div>
          </div>
          {this.state.toggleSignIn ? (
            <p
              className="signInButton"
              onClick={() => this.toggleCredentials()}
            >
              Sign In
            </p>
          ) : (
            <button type="submit" className="button loginButton">
              Login
            </button>
          )}
          <div>
            {authError ? <div className="loginError">{authError}</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signIn: creds => actions.signIn(creds)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
