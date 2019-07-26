import React from "react";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";

class TopBanner extends React.Component {
  render() {
    return (
      <header>
        <div className="topBannerImage" />
        <div className="topBanner">
          <SignUp />
          <SignIn />

          <h1>International Students</h1>
          <h2>Online Learning Resource</h2>
        </div>
      </header>
    );
  }
}

export default TopBanner;
