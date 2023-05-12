import React, { Component } from "react";

class Projects extends Component {
  // constructor{
  //     super();

  //     this.state = {}
  // }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Project Title</label>
            <input type="text"></input>
            <label>Project Location</label>
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

export default Projects;
