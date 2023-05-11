import React, { Component } from "react";

class Education extends Component {
  // constructor{
  //     super();

  //     this.state = {}
  // }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Title of Study</label>
            <input type="text"></input>
            <label>Name of Institution</label>
            <input type="text"></input>
            <label>Institution Location</label>
            <input type="text"></input>
            <label>Start Date</label>
            <input type="date"></input>
            <label>End Date</label>
            <input type="date"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
