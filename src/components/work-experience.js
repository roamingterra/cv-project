import React, { Component } from "react";
import workExperienceCss from "./../styles/workExperience.module.css";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.dataType = "";
    this.index = 0;

    this.state = {
      jobTitle: "",
      companyName: "",
      companyLocation: "",
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

  updateJobTitle = (event) => {
    const { value } = event.target;
    this.setState(
      {
        jobTitle: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateCompanyName = (event) => {
    const { value } = event.target;
    this.setState(
      {
        companyName: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateCompanyLocation = (event) => {
    const { value } = event.target;
    this.setState(
      {
        companyLocation: value,
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
      <div className={workExperienceCss.container}>
        <form>
          <div className={workExperienceCss.form}>
            <input
              type="text"
              onChange={this.updateJobTitle}
              placeholder="Job Title"
              className={`${workExperienceCss.input} ${workExperienceCss.title}`}
            ></input>
            <input
              type="text"
              onChange={this.updateCompanyName}
              placeholder="Company Name"
              className={workExperienceCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateCompanyLocation}
              placeholder="Company Location"
              className={workExperienceCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateStartDate}
              placeholder="Start Date"
              className={workExperienceCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateEndDate}
              placeholder="End Date"
              className={workExperienceCss.input}
            ></input>
            <textarea
              onChange={this.updateResponsibilities}
              placeholder="Responsibilities"
              className={`${workExperienceCss.input} ${workExperienceCss.responsibilities}`}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperience;
