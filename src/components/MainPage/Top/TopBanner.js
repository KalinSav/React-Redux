import React from "react";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/authActions";

class TopBanner extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.signOut(this.props.auth);
  };

  componentDidUpdate() {
    const loggedInMessage = document.querySelector(".loggedInMessage");
    if (loggedInMessage && loggedInMessage.style.display !== "none") {
      setTimeout(() => {
        loggedInMessage.style.display = "none";
      }, 6000);
      return false;
    }
  }

  render() {
    const isLoggedStyle = {};
    const { auth } = this.props;
    const links = auth.isLogged ? (
      <div>
        <p className="loggedInAs">{auth.loggedInAs}</p>
        <button onClick={this.handleSubmit} className="button logOutButton">
          Log Out
        </button>
        <p className="loggedInMessage">
          You have logged in as {auth.loggedInAs}
          <svg>
            <circle r="6" cx="8" cy="8" />
          </svg>
        </p>
      </div>
    ) : (
      <div>
        <SignUp />
        <SignIn />
      </div>
    );
    return (
      <header>
        {links}
        <div className="topBannerImage" />
        <div className="topBanner">
          <h1 style={auth.isLogged ? isLoggedStyle : null}>
            INTERNATIONAL
            <br />
            STUDENTS
          </h1>
          <h2>Online Learning Resource</h2>
        </div>
      </header>
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
      signOut: creds => actions.signOut(creds)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBanner);
