import React, { Component } from "react";
import generalInfoCss from "./../styles/generalInformation.module.css";

class GeneralInformation extends Component {
  constructor() {
    super();

    this.dataType = "";

    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      linkedIn: "",
      gitHub: "",
    };
  }

  componentDidMount() {
    const { dataType } = this.props;
    // Now you can use the dataType prop safely
    this.dataType = dataType;
  }

  updateFirstName = (event) => {
    const { value } = event.target;
    this.setState(
      {
        firstName: value,
      },
      () => this.props.onDataChange(this.state, this.dataType)
    );
  };

  updateLastName = (event) => {
    const { value } = event.target;
    this.setState(
      {
        lastName: value,
      },
      () => this.props.onDataChange(this.state, this.dataType)
    );
  };

  updatePhoneNumber = (event) => {
    const { value } = event.target;
    this.setState(
      {
        phoneNumber: value,
      },
      () => this.props.onDataChange(this.state, this.dataType)
    );
  };

  updateEmail = (event) => {
    const { value } = event.target;
    this.setState(
      {
        email: value,
      },
      () => this.props.onDataChange(this.state, this.dataType)
    );
  };

  updateLinkedIn = (event) => {
    const { value } = event.target;
    this.setState(
      {
        linkedIn: value,
      },
      () => this.props.onDataChange(this.state, this.dataType)
    );
  };

  updateGitHub = (event) => {
    const { value } = event.target;
    this.setState(
      {
        gitHub: value,
      },
      () => this.props.onDataChange(this.state, this.dataType)
    );
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
