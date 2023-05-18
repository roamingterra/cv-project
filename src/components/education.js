import React, { Component } from "react";
import educationCss from "./../styles/education.module.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.dataType = "";
    this.index = 0;

    this.state = {
      titleOfStudy: "",
      nameOfInstitution: "",
      institutionLocation: "",
      startDate: "",
      endDate: "",
    };
  }

  componentDidMount() {
    const { index, dataType } = this.props;
    // Now you can use the index prop safely
    this.index = index;
    this.dataType = dataType;
  }

  updateTitleOfStudy = (event) => {
    const { value } = event.target;
    this.setState(
      {
        titleOfStudy: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateNameOfInstitution = (event) => {
    const { value } = event.target;
    this.setState(
      {
        nameOfInstitution: value,
      },
      () => this.props.onDataChange(this.state, this.dataType, this.index)
    );
  };

  updateInstitutionLocation = (event) => {
    const { value } = event.target;
    this.setState(
      {
        institutionLocation: value,
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

  render() {
    return (
      <div className={educationCss.container}>
        <form>
          <div className={educationCss.form}>
            <input
              type="text"
              onChange={this.updateTitleOfStudy}
              placeholder="Title of Study"
              className={`${educationCss.input} ${educationCss.title}`}
            ></input>
            <input
              type="text"
              onChange={this.updateNameOfInstitution}
              placeholder="Name of Institution"
              className={educationCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateInstitutionLocation}
              placeholder="Institution Location"
              className={educationCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateStartDate}
              placeholder="Start Date"
              className={educationCss.input}
            ></input>
            <input
              type="text"
              onChange={this.updateEndDate}
              placeholder="End Date"
              className={educationCss.input}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
