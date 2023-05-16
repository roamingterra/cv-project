import React, { Component } from "react";
import educationCss from "./../styles/education.module.css";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      titleOfStudy: "",
      nameOfInstitution: "",
      institutionLocation: "",
      startDate: "",
      endDate: "",
    };
  }

  updateTitleOfStudy = (event) => {
    this.setState({
      titleOfStudy: event.target.value,
    });
  };

  updateNameOfInstitution = (event) => {
    this.setState({
      nameOfInstitution: event.target.value,
    });
  };

  updateInstitutionLocation = (event) => {
    this.setState({
      institutionLocation: event.target.value,
    });
  };

  updateStartDate = (event) => {
    this.setState({
      startDate: event.target.value,
    });
  };

  updateEndDate = (event) => {
    this.setState({
      endDate: event.target.value,
    });
  };

  render() {
    return (
      <div className={educationCss.container}>
        <form>
          <div className={educationCss.form}>
            <input
              type="text"
              onChange={this.updateTitleOfStudy}
              placeholder="Title of Study"
              className={`${educationCss.input} ${educationCss.title}`}
            ></input>
            <input
              type="text"
              onChange={this.updateNameOfInstitution}
              placeholder="Name of Institution"
              className={educationCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateInstitutionLocation}
              placeholder="Institution Location"
              className={educationCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateStartDate}
              placeholder="Start Date"
              className={educationCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateEndDate}
              placeholder="End Date"
              className={educationCss.input}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
