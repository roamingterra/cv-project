import React, { Component } from "react";

class WorkExperience extends Component {
  // constructor{
  //     super();

  //     this.state = {}
  // }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Job Title</label>
            <input type="text"></input>
            <label>Company Name</label>
            <input type="text"></input>
            <label>Company Location</label>
            <input type="text"></input>
            <label>Start Date</label>
            <input type="date"></input>
            <label>End Date</label>
            <input type="date"></input>
            <label>Responsibilities</label>
            <textarea></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperience;
