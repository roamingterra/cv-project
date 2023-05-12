import React, { Component } from "react";
import GeneralInformation from "./components/general-information";
import Skills from "./components/skills";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import Education from "./components/education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      workExperienceAddedInstances: [],
      projectsAddedInstances: [],
      educationAddedInstances: [],
    };
  }

  newWorkExperience = () => {
    const newInstance = (
      <WorkExperience
        key={this.state.workExperienceAddedInstances.length}
      ></WorkExperience>
    );
    this.setState((prevState) => ({
      workExperienceAddedInstances: [
        ...prevState.workExperienceAddedInstances,
        newInstance,
      ],
    }));
  };

  removeWorkExperience = () => {
    this.setState((prevState) => ({
      workExperienceAddedInstances: [
        ...prevState.workExperienceAddedInstances,
      ].slice(0, -1),
    }));
  };

  newProject = () => {
    const newInstance = (
      <Projects key={this.state.projectsAddedInstances.length}></Projects>
    );
    this.setState((prevState) => ({
      projectsAddedInstances: [
        ...prevState.projectsAddedInstances,
        newInstance,
      ],
    }));
  };

  removeProject = () => {
    this.setState((prevState) => ({
      projectsAddedInstances: [...prevState.projectsAddedInstances].slice(
        0,
        -1
      ),
    }));
  };

  newEducation = () => {
    const newInstance = (
      <Education key={this.state.educationAddedInstances.length}></Education>
    );
    this.setState((prevState) => ({
      educationAddedInstances: [
        ...prevState.educationAddedInstances,
        newInstance,
      ],
    }));
  };

  removeEducation = () => {
    this.setState((prevState) => ({
      educationAddedInstances: [...prevState.educationAddedInstances].slice(
        0,
        -1
      ),
    }));
  };

  render() {
    const {
      workExperienceAddedInstances,
      projectsAddedInstances,
      educationAddedInstances,
    } = this.state;

    return (
      <div className="App">
        <h1>CV Generator</h1>
        <h2>General Information</h2>
        <GeneralInformation></GeneralInformation>
        <h2>Summary of Skills and Qualifications</h2>
        <Skills></Skills>
        <h2>Work Experience</h2>
        <WorkExperience></WorkExperience>
        {workExperienceAddedInstances}
        {this.state.workExperienceAddedInstances.length !== 0 && (
          <button onClick={this.removeWorkExperience}>Delete</button>
        )}
        <button onClick={this.newWorkExperience}>Add</button>
        <h2>Projects</h2>
        <Projects></Projects>
        {projectsAddedInstances}
        {this.state.projectsAddedInstances.length !== 0 && (
          <button onClick={this.removeProject}>Delete</button>
        )}
        <button onClick={this.newProject}>Add</button>
        <h2>Education</h2>
        <Education></Education>
        {educationAddedInstances}
        {this.state.educationAddedInstances.length !== 0 && (
          <button onClick={this.removeEducation}>Delete</button>
        )}
        <button onClick={this.newEducation}>Add</button>
        <button>Generate PDF</button>
      </div>
    );
  }
}

export default App;
