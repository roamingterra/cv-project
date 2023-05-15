import React, { Component } from "react";
import projectsCss from "./../styles/projects.module.css";

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
      <div className={projectsCss.container}>
        <form>
          <div className={projectsCss.form}>
            <input
              type="text"
              onChange={this.updateProjectTitle}
              placeholder="Project Title"
              className={projectsCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateProjectLocation}
              placeholder="Project Location"
              className={projectsCss.input}
            ></input>
            <input
              type="date"
              onChange={this.updateStartDate}
              placeholder="Start Date"
              className={projectsCss.input}
            ></input>
            <input
              type="date"
              onChange={this.updateEndDate}
              placeholder="End Date"
              className={projectsCss.input}
            ></input>
            <textarea
              onChange={this.updateResponsibilities}
              placeholder="Responsibilities"
              className={projectsCss.input}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Projects;
