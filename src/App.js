import React, { Component } from "react";
import GeneralInformation from "./components/general-information";
import Skills from "./components/skills";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import Education from "./components/education";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CV Generator</h1>
        <GeneralInformation></GeneralInformation>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
        <Education></Education>
      </div>
    );
  }
}

export default App;
