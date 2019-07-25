import React from "react";
import TopBanner from "./TopBanner.js";
import TopText from "./TopText";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";

class Top extends React.Component {
  render() {
    return (
      <header>
        <SignIn />
        <SignUp />
        <TopBanner />
        <TopText />
      </header>
    );
  }
}

export default Top;
