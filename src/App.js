import React, { Component } from "react";
import GeneralInformation from "./components/general-information";
import Skills from "./components/skills";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import Education from "./components/education";
import uniqid from "uniqid";
import "./styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      skillElements: [],
      workExperienceAddedInstances: [],
      projectsAddedInstances: [],
      educationAddedInstances: [],

      programmingLanguages: [],
      frameworksAndLibraries: [],
      tools: [],
      languagesSpoken: [],
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

  //Skill methods
  addSkillElement = (skillInfo) => {
    const newSkill = skillInfo[0];
    const skillType = skillInfo[1];
    const key = skillType + "-" + uniqid();
    const newSkillElement = (
      <div className="skill-element" key={key}>
        <div>{newSkill}</div>
        <div
          onClick={() => {
            this.removeSkill(key);
          }}
        >
          ✖
        </div>
      </div>
    );
    this.setState((prevState) => ({
      skillElements: [...prevState.skillElements, newSkillElement],
    }));
  };

  removeSkill = (key) => {
    const regex = /^(.+?)-/;
    const skillType = key.match(regex)[1];
    let skillToBeRemoved;

    // Remove skill element
    this.setState((prevState) => ({
      skillElements: prevState.skillElements.filter((element) => {
        if (element.key !== key) return true;
        else {
          skillToBeRemoved = element.props.children[0].props.children;
          return false;
        }
      }),
    }));

    // Remove specific skill from state
    if (skillType === "programmingLanguage") {
      this.setState((prevState) => ({
        programmingLanguages: prevState.programmingLanguages.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    } else if (skillType === "framework") {
      this.setState((prevState) => ({
        frameworksAndLibraries: prevState.frameworksAndLibraries.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    } else if (skillType === "tool") {
      this.setState((prevState) => ({
        tools: prevState.tools.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    } else if (skillType === "languageSpoken") {
      this.setState((prevState) => ({
        languagesSpoken: prevState.languagesSpoken.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    }
  };

  addProgrammingLanguage = async (event) => {
    const skillType = "programmingLanguage";
    if (event.key === "Enter") {
      return await new Promise((resolve) => {
        this.setState(
          (prevState) => ({
            programmingLanguages: [
              ...prevState.programmingLanguages,
              event.target.value,
            ],
          }),
          () => {
            const newSkill = event.target.value;
            event.target.value = "";
            const skillInfo = [newSkill, skillType];
            resolve(skillInfo);
          }
        );
      });
    }
  };

  addFramework = async (event) => {
    const skillType = "framework";
    if (event.key === "Enter") {
      return await new Promise((resolve) => {
        this.setState(
          (prevState) => ({
            frameworksAndLibraries: [
              ...prevState.frameworksAndLibraries,
              event.target.value,
            ],
          }),
          () => {
            const newSkill = event.target.value;
            event.target.value = "";
            const skillInfo = [newSkill, skillType];
            resolve(skillInfo);
          }
        );
      });
    }
  };

  addTool = async (event) => {
    const skillType = "tool";
    if (event.key === "Enter") {
      return await new Promise((resolve) => {
        this.setState(
          (prevState) => ({
            tools: [...prevState.tools, event.target.value],
          }),
          () => {
            const newSkill = event.target.value;
            event.target.value = "";
            const skillInfo = [newSkill, skillType];
            resolve(skillInfo);
          }
        );
      });
    }
  };

  addLanguageSpoken = async (event) => {
    const skillType = "languageSpoken";
    if (event.key === "Enter") {
      return await new Promise((resolve) => {
        this.setState(
          (prevState) => ({
            languagesSpoken: [...prevState.languagesSpoken, event.target.value],
          }),
          () => {
            const newSkill = event.target.value;
            event.target.value = "";
            const skillInfo = [newSkill, skillType];
            resolve(skillInfo);
          }
        );
      });
    }
  };

  render() {
    const {
      skillElements,
      workExperienceAddedInstances,
      projectsAddedInstances,
      educationAddedInstances,
    } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>WEB DEV CV GENERATOR</h1>
        </div>
        <div className="content">
          <div className="component">
            <h2>General Information</h2>
            <GeneralInformation></GeneralInformation>
          </div>

          <div className="component">
            <div className="skills-header">
              <h2>Skills and Qualifications</h2>
              <h4>*type in a skill and press ENTER to add a skill tag</h4>
            </div>
            <div className="skill-tags">{skillElements}</div>
            <Skills
              addProgrammingLanguage={this.addProgrammingLanguage}
              addFramework={this.addFramework}
              addTool={this.addTool}
              addLanguageSpoken={this.addLanguageSpoken}
              addSkillElement={this.addSkillElement}
            ></Skills>
          </div>

          <div className="component">
            <h2>Work Experience</h2>
            <WorkExperience></WorkExperience>
            {workExperienceAddedInstances}
            {this.state.workExperienceAddedInstances.length !== 0 && (
              <button className="delete" onClick={this.removeWorkExperience}>
                Delete
              </button>
            )}
            <button className="add" onClick={this.newWorkExperience}>
              Add
            </button>
          </div>

          <div className="component">
            <h2>Projects</h2>
            <Projects></Projects>
            {projectsAddedInstances}
            {this.state.projectsAddedInstances.length !== 0 && (
              <button className="delete" onClick={this.removeProject}>
                Delete
              </button>
            )}
            <button className="add" onClick={this.newProject}>
              Add
            </button>
          </div>

          <div className="component">
            <h2>Education</h2>
            <Education></Education>
            {educationAddedInstances}
            {this.state.educationAddedInstances.length !== 0 && (
              <button className="delete" onClick={this.removeEducation}>
                Delete
              </button>
            )}
            <button className="add" onClick={this.newEducation}>
              Add
            </button>
          </div>
          <button className="generate-pdf">Generate PDF</button>
        </div>

        <div className="footer">
          <div>Website created by Daniel Ballerini</div>
          <div>
            with help from the
            <a href="https://www.theodinproject.com/"> © Odin Project</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
