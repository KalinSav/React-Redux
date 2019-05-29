import React from "react";
import MainPage from "../MainPage/MainPage.js";
import Form from "./components/Form/Form.js";
//import UserForm from "./components/Form/UserForm.js";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <Form />
        <MainPage />
      </div>
    );
  }
}

export default App;
