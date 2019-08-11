import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/authActions";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      signUpUsername: "",
      signUpPassword: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  checkSubmitIsCorrect = () => {
    const signUpErrMsg = document.getElementsByClassName("signUpErrMsg");
    if (signUpErrMsg.length) {
      while (signUpErrMsg[0]) {
        signUpErrMsg[0].parentNode.removeChild(signUpErrMsg[0]);
      }
    }

    const runChecks = (entry, id) => {
      if (entry === true) {
        return true;
      } else {
        const errorMsg = document.createElement("span");
        const textnode = document.createTextNode(entry);
        errorMsg.appendChild(textnode);
        errorMsg.className = "signUpErrMsg";
        document.getElementById(id).parentNode.appendChild(errorMsg);
      }
    };

    const entryFields = [
      {
        firstName:
          document.getElementById("firstName").value.length > 0
            ? null
            : "Please enter first name"
      },
      {
        lastName:
          document.getElementById("lastName").value.length > 0
            ? null
            : "Please enter last name"
      },
      {
        signUpUsername:
          document.getElementById("signUpUsername").value.length >= 6
            ? null
            : "Username must be 6 or more characters"
      },
      {
        signUpPassword:
          document.getElementById("signUpPassword").value.length >= 6
            ? null
            : "Password must be 6 or more characters"
      }
    ];

    const entryFieldsValues = entryFields.map(item => {
      runChecks(Object.values(item), Object.keys(item));
      return Object.values(item)[0];
    });

    const areAllFieldsCorrect = () => {
      return entryFieldsValues.every(fieldValue => fieldValue === null);
    };

    if (areAllFieldsCorrect() === true) {
      return true;
    }
  };

  handleSubmit = e => {
    const state = this.state;
    const auth = this.props.auth;
    const creds = { state, auth };
    e.preventDefault();
    if (this.checkSubmitIsCorrect() === true) {
      this.props.signUp(creds);
    }
  };

  toggleModal = () => {
    if (this.props.auth.signUpSuccess !== null) {
      console.log(this.props.auth);
    }

    const modal = document.getElementById("modal");
    if (!modal.style.display) {
      modal.style.display = "block";
    } else if (modal.style.display === "block") {
      modal.removeAttribute("style");
    }
  };

  render() {
    const { signUpSuccess } = this.props.auth;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signUpModal" id="modal">
            <div className="modalContent">
              <span className="closeBtn" onClick={this.toggleModal}>
                &times;
              </span>
              <h3>Sign Up</h3>
              {signUpSuccess ? (
                <div className="signUpSuccess">{signUpSuccess}</div>
              ) : (
                <div>
                  <div className="inputField">
                    <label htmlFor="firstName">First Name</label>
                    <br />
                    <input
                      type="text"
                      id="firstName"
                      pattern="[a-zA-Z]+"
                      title="Only letters allowed"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="inputField">
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input
                      type="text"
                      id="lastName"
                      pattern="[a-zA-Z]+"
                      title="Only letters allowed"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="inputField">
                    <label htmlFor="signUpUsername">Username</label>
                    <br />
                    <input
                      type="text"
                      id="signUpUsername"
                      pattern="[a-zA-Z0-9-]+"
                      title="Only letters and numbers allowed"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="inputField">
                    <label htmlFor="signUpPassword">Password</label>
                    <br />
                    <input
                      type="password"
                      id="signUpPassword"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button className="button">Sign Up</button>
                </div>
              )}
            </div>
          </div>
          <p className="button signUpButton" onClick={this.toggleModal}>
            Sign Up
          </p>
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
      signUp: creds => actions.signUp(creds)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
