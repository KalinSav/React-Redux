import React from "react";
import Top from "../MainPage/Top/Top.js";
import Mid from "../MainPage/Mid/Mid.js";
import Bot from "../MainPage/Bot/Bot.js";
import Footer from "./Footer.js";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Top />
        <Mid />
        <Bot />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
