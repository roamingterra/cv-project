import React, { Component } from "react";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projectTitle: "",
      projectLocation: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };
  }

  updateProjectTitle = (event) => {
    this.setState({
      projectTitle: event.target.value,
    });
  };

  updateProjectLocation = (event) => {
    this.setState({
      projectLocation: event.target.value,
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

  updateResponsibilities = (event) => {
    this.setState({
      responsibilities: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Project Title</label>
            <input type="text" onChange={this.updateProjectTitle}></input>
            <label>Project Location</label>
            <input type="text" onChange={this.updateProjectLocation}></input>
            <label>Start Date</label>
            <input type="date" onChange={this.updateStartDate}></input>
            <label>End Date</label>
            <input type="date" onChange={this.updateEndDate}></input>
            <label>Responsibilities</label>
            <textarea onChange={this.updateResponsibilities}></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Projects;
