import React, { Component } from "react";
import generalInfoCss from "./../styles/generalInformation.module.css";

class GeneralInformation extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      linkedIn: "",
      gitHub: "",
    };
  }

  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  updatePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updateLinkedIn = (event) => {
    this.setState({
      linkedIn: event.target.value,
    });
  };

  updateGitHub = (event) => {
    this.setState({
      gitHub: event.target.value,
    });
  };

  render() {
    return (
      <div className={generalInfoCss.container}>
        <form>
          <div className={generalInfoCss.form}>
            <input
              type="text"
              onChange={this.updateFirstName}
              placeholder="First Name"
              className={generalInfoCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateLastName}
              placeholder="Last Name"
              className={generalInfoCss.input}
            ></input>
            <input
              type="tel"
              onChange={this.updatePhoneNumber}
              placeholder="Phone Number"
              className={generalInfoCss.input}
            ></input>
            <input
              type="email"
              onChange={this.updateEmail}
              placeholder="Email"
              className={generalInfoCss.input}
            ></input>
            <input
              type="url"
              onChange={this.updateLinkedIn}
              placeholder="LinkedIn"
              className={generalInfoCss.input}
            ></input>
            <input
              type="url"
              onChange={this.updateGitHub}
              placeholder="GitHub"
              className={generalInfoCss.input}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
