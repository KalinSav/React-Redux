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
    const runChecks = (entry, id) => {
      if (entry === true) {
        return true;
      } else {
        const errorMsg = document.createElement("span");
        const textnode = document.createTextNode(entry);
        errorMsg.appendChild(textnode);
        document.getElementById(id).parentNode.appendChild(errorMsg);
      }
    };

    const fields = [
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
          document.getElementById("signUpUsername").value.length > 0
            ? null
            : "Please enter username"
      },
      {
        signUpPassword:
          document.getElementById("signUpPassword").value.length >= 6
            ? null
            : "Password mustbe at least 6 characters long"
      }
    ];

    const fieldss = fields.map(item => {
      // runChecks(Object.values(item), Object.keys(item))
      return Object.values(item);
    });
    console.log(fieldss);
    // for (let i = 0; i < fields.length; i++) {
    //   return runChecks(Object.values(fields[i]), Object.keys(fields[i]))
    //   // console.log(Object.keys(fields[i]), Object.values(fields[i]))
    // }

    // const isFirstNameCorrect = () => {
    //   const firstName = document.getElementById("firstName").value.length > 0 ? true : "Please enter first name"
    //   return runChecks(firstName, "firstName")
    // }

    // const isLastNameCorrect = () => {
    //   const lastName = document.getElementById("lastName").value.length > 0 ? true : "Please enter last name"
    //   return runChecks(lastName, "lastName")

    // }

    // const isUsernameCorrect = () => {
    //   const signUpUsername = document.getElementById("signUpUsername").value.length > 0 ? true : "Please enter username"
    //   return runChecks(signUpUsername, "signUpUsername")

    // }

    // const isPasswordCorrect = () => {
    //   const signUpPassword = document.getElementById("signUpPassword").value.length > 6 ? true : "Password mustbe at least 6 characters long"
    //   return runChecks(signUpPassword, "signUpPassword")

    // }

    function checkAdult(fieldss) {
      return fieldss === null;
    }

    const everythingCorrect = () => {
      return fieldss.every(checkAdult);
    };

    console.log("everything is " + everythingCorrect());
    // if (
    //   isFirstNameCorrect() === true &&
    //   isLastNameCorrect() === true &&
    //   isUsernameCorrect() === true &&
    //   isPasswordCorrect() === true
    //   ) {
    //   return true
    // }
  };

  handleSubmit = e => {
    console.log(this.checkSubmitIsCorrect());
    const state = this.state;
    const auth = this.props.auth;
    const creds = { state, auth };
    e.preventDefault();
    // if (this.checkSubmitIsCorrect === true) {
    //   this.props.signUp(creds);
    // }
  };

  toggleModal = () => {
    const modal = document.getElementById("modal");
    if (!modal.style.display) {
      modal.style.display = "block";
    } else if (modal.style.display === "block") {
      modal.removeAttribute("style");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signUpModal" id="modal">
            <div className="modalContent">
              <span className="closeBtn" onClick={this.toggleModal}>
                &times;
              </span>
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
                <label htmlFor="signUpUsername">Username</label>
                <br />
                <input
                  type="text"
                  id="signUpUsername"
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
