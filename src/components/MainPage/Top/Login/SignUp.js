import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
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
  toggleModal = () => {
    const modal = document.getElementById("modal");
    if (!modal.style.display) {
      modal.style.display = "block";
    } else if (modal.style.display === "block") {
      modal.removeAttribute("style");
    }
    console.log(modal.style);
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
                <label htmlFor="signUpEmail">Email</label>
                <br />
                <input
                  type="email"
                  id="signUpEmail"
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
          <p className="signUpButton ">
            <button className="button" onClick={this.toggleModal}>
              Sign Up
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
