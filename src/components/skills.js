import React, { Component } from "react";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      programmingLanguages: [],
      frameworksAndLibraries: [],
      tools: [],
      languagesSpoken: [],
    };
  }

  addProgrammingLanguage = (event) => {
    if (event.key === "Enter") {
      this.setState(
        (prevState) => ({
          programmingLanguages: [
            ...prevState.programmingLanguages,
            event.target.value,
          ],
        }),
        () => {
          this.props.addSkillElement(event.target.value);
          event.target.value = "";
        }
      );
    }
  };

  addFramework = (event) => {
    if (event.key === "Enter") {
      this.setState(
        (prevState) => ({
          frameworksAndLibraries: [
            ...prevState.frameworksAndLibraries,
            event.target.value,
          ],
        }),
        () => {
          event.target.value = "";
        }
      );
    }
  };

  addTool = (event) => {
    if (event.key === "Enter") {
      this.setState(
        (prevState) => ({
          tools: [...prevState.tools, event.target.value],
        }),
        () => {
          event.target.value = "";
        }
      );
    }
  };

  addLanguageSpoken = (event) => {
    if (event.key === "Enter") {
      this.setState(
        (prevState) => ({
          languagesSpoken: [...prevState.languagesSpoken, event.target.value],
        }),
        () => {
          event.target.value = "";
        }
      );
    }
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Programming Languages</label>
            <input type="text" onKeyDown={this.addProgrammingLanguage}></input>
            <label>Frameworks and Libraries</label>
            <input type="text" onKeyDown={this.addFramework}></input>
            <label>Tools</label>
            <input type="text" onKeyDown={this.addTool}></input>
            <label>Languages Spoken</label>
            <input type="text" onKeyDown={this.addLanguageSpoken}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Skills;
