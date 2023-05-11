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
    const newInstance = <WorkExperience></WorkExperience>;
    this.setState((prevState) => ({
      workExperienceAddedInstances: [
        ...prevState.workExperienceAddedInstances,
        newInstance,
      ],
    }));
  };

  newProject = () => {
    const newInstance = <Projects></Projects>;
    this.setState((prevState) => ({
      projectsAddedInstances: [
        ...prevState.projectsAddedInstances,
        newInstance,
      ],
    }));
  };

  newEducation = () => {
    const newInstance = <Education></Education>;
    this.setState((prevState) => ({
      educationAddedInstances: [
        ...prevState.educationAddedInstances,
        newInstance,
      ],
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
        <button onClick={this.newWorkExperience}>Add</button>
        <h2>Projects</h2>
        <Projects></Projects>
        {projectsAddedInstances}
        <button onClick={this.newProject}>Add</button>
        <h2>Education</h2>
        <Education></Education>
        {educationAddedInstances}
        <button onClick={this.newEducation}>Add</button>
      </div>
    );
  }
}

export default App;
