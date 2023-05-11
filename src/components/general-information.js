import React, { Component } from "react";

class GeneralInformation extends Component {
  // constructor{
  //     super();

  //     this.state = {}
  // }

  render() {
    return (
      <div>
        <h2>General Information</h2>
        <form>
          <div>
            <label>First Name</label>
            <input></input>
            <label>Last Name</label>
            <input></input>
            <label>Phone Number</label>
            <input></input>
            <label>Email</label>
            <input></input>
            <label>LinkedIn</label>
            <input></input>
            <label>GitHub</label>
            <input></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
