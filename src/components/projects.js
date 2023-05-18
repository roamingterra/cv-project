import React, { Component } from "react";
import projectsCss from "./../styles/projects.module.css";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.dataType = "";
    this.index = 0;

    this.state = {
      projectTitle: "",
      projectLocation: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };
  }

  componentDidMount() {
    const { index, dataType } = this.props;
    // Now you can use the index prop safely
    this.index = index;
    this.dataType = dataType;
  }

  updateProjectTitle = (event) => {
    const { value } = event.target;
    this.setState(
      {
        projectTitle: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateProjectLocation = (event) => {
    const { value } = event.target;
    this.setState(
      {
        projectLocation: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateStartDate = (event) => {
    const { value } = event.target;
    this.setState(
      {
        startDate: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateEndDate = (event) => {
    const { value } = event.target;
    this.setState(
      {
        endDate: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateResponsibilities = (event) => {
    const { value } = event.target;
    this.setState(
      {
        responsibilities: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
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
              type="text"
              onChange={this.updateStartDate}
              placeholder="Start Date"
              className={projectsCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateEndDate}
              placeholder="End Date"
              className={projectsCss.input}
            ></input>
            <textarea
              onChange={this.updateResponsibilities}
              placeholder="Responsibilities"
              className={`${projectsCss.input} ${projectsCss.responsibilities}`}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Projects;
