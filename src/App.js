import React from "react";
import Form from "./components/Form/Form.js";
//import UserForm from "./components/Form/UserForm.js";
import "./styles.css";
import Top from "./components/MainPage/Top/Top.js";
import Mid from "./components/MainPage/Mid/Mid.js";
import Bot from "./components/MainPage/Bot/Bot.js";
import Footer from "./components/MainPage/Footer.js";

const App = () => {
  return (
    <div className="mainPage">
      <Form />
      <Top />
      <Mid />
      <Bot />
      <Footer />
    </div>
  );
};

export default App;
