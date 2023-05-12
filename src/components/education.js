import React, { Component } from "react";

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
      <div>
        <form>
          <div>
            <label>Title of Study</label>
            <input type="text" onChange={this.updateTitleOfStudy}></input>
            <label>Name of Institution</label>
            <input type="text" onChange={this.updateNameOfInstitution}></input>
            <label>Institution Location</label>
            <input
              type="text"
              onChange={this.updateInstitutionLocation}
            ></input>
            <label>Start Date</label>
            <input type="date" onChange={this.updateStartDate}></input>
            <label>End Date</label>
            <input type="date" onChange={this.updateEndDate}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
