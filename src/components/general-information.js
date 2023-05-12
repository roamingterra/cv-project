import React, { Component } from "react";

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
      <div>
        <form>
          <div>
            <label>First Name</label>
            <input type="text" onChange={this.updateFirstName}></input>
            <label>Last Name</label>
            <input type="text" onChange={this.updateLastName}></input>
            <label>Phone Number</label>
            <input type="tel" onChange={this.updatePhoneNumber}></input>
            <label>Email</label>
            <input type="email" onChange={this.updateEmail}></input>
            <label>LinkedIn</label>
            <input type="url" onChange={this.updateLinkedIn}></input>
            <label>GitHub</label>
            <input type="url" onChange={this.updateGitHub}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
