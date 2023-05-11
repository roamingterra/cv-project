import React, { Component } from "react";

class GeneralInformation extends Component {
  // constructor{
  //     super();

  //     this.state = {}
  // }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>First Name</label>
            <input type="text"></input>
            <label>Last Name</label>
            <input type="text"></input>
            <label>Phone Number</label>
            <input type="tel"></input>
            <label type="email">Email</label>
            <input></input>
            <label type="url">LinkedIn</label>
            <input></input>
            <label>GitHub</label>
            <input type="url"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
