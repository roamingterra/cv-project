import React, { Component } from "react";

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
      <div>
        <form>
          <div>
            <label>Job Title</label>
            <input type="text" onChange={this.updateJobTitle}></input>
            <label>Company Name</label>
            <input type="text" onChange={this.updateCompanyName}></input>
            <label>Company Location</label>
            <input type="text" onChange={this.updateCompanyLocation}></input>
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

export default WorkExperience;
