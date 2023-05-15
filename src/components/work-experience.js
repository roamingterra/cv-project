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
            {/* <label>Job Title</label> */}
            <input
              type="text"
              onChange={this.updateJobTitle}
              placeholder="Job Title"
              className={workExperienceCss.input}
            ></input>
            {/* <label>Company Name</label> */}
            <input
              type="text"
              onChange={this.updateCompanyName}
              placeholder="Company Name"
              className={workExperienceCss.input}
            ></input>
            {/* <label>Company Location</label> */}
            <input
              type="text"
              onChange={this.updateCompanyLocation}
              placeholder="Company Location"
              className={workExperienceCss.input}
            ></input>
            {/* <label>Start Date</label> */}
            <input
              type="date"
              onChange={this.updateStartDate}
              placeholder="Start Date"
              className={workExperienceCss.input}
            ></input>
            {/* <label>End Date</label> */}
            <input
              type="date"
              onChange={this.updateEndDate}
              placeholder="End Date"
              className={workExperienceCss.input}
            ></input>
            {/* <label>Responsibilities</label> */}
            <textarea
              onChange={this.updateResponsibilities}
              placeholder="Responsibilities"
              className={workExperienceCss.input}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperience;
