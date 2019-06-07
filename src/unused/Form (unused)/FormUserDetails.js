import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter User Details" />
            <TextField
              hintText="Enter Your First Name"
              floatingLabelText="First NAme"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <Button />
          </React.Fragment>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormUserDetails;
