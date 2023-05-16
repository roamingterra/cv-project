import React, { Component } from "react";
import workExperienceCss from "./../styles/workExperience.module.css";

class WorkExperience extends Component {
  constructor() {
    super();

    this.state = {
      jobTitle: "",
      companyName: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };
  }

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
