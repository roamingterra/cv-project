import React, { useState } from "react";
import GeneralInformation from "./components/general-information";
import Skills from "./components/skills";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import Education from "./components/education";
import PDFFile from "./components/PDFDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import uniqid from "uniqid";
import "./styles/style.css";

function App() {
  const [state, setState] = useState({
    //Added components
    skillElements: [],
    workExperienceAddedInstances: [],
    projectsAddedInstances: [],
    educationAddedInstances: [],

    //CV data
    programmingLanguages: [],
    frameworksAndLibraries: [],
    tools: [],
    languagesSpoken: [],

    generalInformation: [],
    workExperiences: [],
    projects: [],
    education: [],
  });

  const newWorkExperience = () => {
    const newInstance = (
      <WorkExperience
        key={`work-instance-${state.workExperienceAddedInstances.length + 1}`}
        index={state.workExperiences.length}
        dataType="workExperiences"
        onDataChange={receiveStateData}
      ></WorkExperience>
    );
    setState((prevState) => ({
      ...prevState,
      workExperienceAddedInstances: [
        ...prevState.workExperienceAddedInstances,
        newInstance,
      ],
    }));
  };

  const removeWorkExperience = () => {
    setState((prevState) => ({
      ...prevState,
      workExperienceAddedInstances: [
        ...prevState.workExperienceAddedInstances,
      ].slice(0, -1),
      workExperiences: [...prevState.workExperiences].slice(0, -1),
    }));
  };

  const newProject = () => {
    const newInstance = (
      <Projects
        key={`project-instance-${state.projectsAddedInstances.length + 1}`}
        index={state.projects.length}
        dataType="projects"
        onDataChange={receiveStateData}
      ></Projects>
    );
    setState((prevState) => ({
      ...prevState,
      projectsAddedInstances: [
        ...prevState.projectsAddedInstances,
        newInstance,
      ],
    }));
  };

  const removeProject = () => {
    setState((prevState) => ({
      ...prevState,
      projectsAddedInstances: [...prevState.projectsAddedInstances].slice(
        0,
        -1
      ),
      projects: [...prevState.projects].slice(0, -1),
    }));
  };

  const newEducation = () => {
    const newInstance = (
      <Education
        key={`education-instance-${state.educationAddedInstances.length + 1}`}
        index={state.education.length}
        dataType="education"
        onDataChange={receiveStateData}
      ></Education>
    );
    setState((prevState) => ({
      ...prevState,
      educationAddedInstances: [
        ...prevState.educationAddedInstances,
        newInstance,
      ],
    }));
  };

  const removeEducation = () => {
    setState((prevState) => ({
      ...prevState,
      educationAddedInstances: [...prevState.educationAddedInstances].slice(
        0,
        -1
      ),
      education: [...prevState.education].slice(0, -1),
    }));
  };

  //Skill methods
  const addSkillElement = (skillInfo) => {
    const newSkill = skillInfo[0];
    const skillType = skillInfo[1];
    const key = skillType + "-" + uniqid();
    const newSkillElement = (
      <div className="skill-element" key={key}>
        <div>{newSkill}</div>
        <div
          onClick={() => {
            removeSkill(key);
          }}
        >
          ✖
        </div>
      </div>
    );
    setState((prevState) => ({
      ...prevState,
      skillElements: [...prevState.skillElements, newSkillElement],
    }));
  };

  const removeSkill = (key) => {
    const regex = /^(.+?)-/;
    const skillType = key.match(regex)[1];
    let skillToBeRemoved;

    // Remove skill element
    setState((prevState) => ({
      ...prevState,
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
      setState((prevState) => ({
        ...prevState,
        programmingLanguages: prevState.programmingLanguages.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    } else if (skillType === "framework") {
      setState((prevState) => ({
        ...prevState,
        frameworksAndLibraries: prevState.frameworksAndLibraries.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    } else if (skillType === "tool") {
      setState((prevState) => ({
        ...prevState,
        tools: prevState.tools.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    } else if (skillType === "languageSpoken") {
      setState((prevState) => ({
        ...prevState,
        languagesSpoken: prevState.languagesSpoken.filter(
          (element) => element !== skillToBeRemoved
        ),
      }));
    }
  };

  const addProgrammingLanguage = async (event) => {
    if (event.key === "Enter") {
      const skillType = "programmingLanguage";

      setState((prevState) => ({
        ...prevState,
        programmingLanguages: [
          ...prevState.programmingLanguages,
          event.target.value,
        ],
      }));

      const newSkill = event.target.value;
      event.target.value = "";
      const skillInfo = [newSkill, skillType];
      return skillInfo;
    }
  };

  const addFramework = async (event) => {
    if (event.key === "Enter") {
      const skillType = "framework";
      setState((prevState) => ({
        ...prevState,
        frameworksAndLibraries: [
          ...prevState.frameworksAndLibraries,
          event.target.value,
        ],
      }));

      const newSkill = event.target.value;
      event.target.value = "";
      const skillInfo = [newSkill, skillType];
      return skillInfo;
    }
  };

  const addTool = async (event) => {
    if (event.key === "Enter") {
      const skillType = "tool";
      setState((prevState) => ({
        ...prevState,
        tools: [...prevState.tools, event.target.value],
      }));

      const newSkill = event.target.value;
      event.target.value = "";
      const skillInfo = [newSkill, skillType];
      return skillInfo;
    }
  };

  const addLanguageSpoken = async (event) => {
    if (event.key === "Enter") {
      const skillType = "languageSpoken";
      setState((prevState) => ({
        ...prevState,
        languagesSpoken: [...prevState.languagesSpoken, event.target.value],
      }));

      const newSkill = event.target.value;
      event.target.value = "";
      const skillInfo = [newSkill, skillType];
      return skillInfo;
    }
  };

  const receiveStateData = (newData, dataType, index) => {
    setState((prevState) => {
      if (dataType === "generalInformation") {
        return { ...prevState, [dataType]: newData };
      }

      if (
        dataType === "workExperiences" ||
        dataType === "projects" ||
        dataType === "education"
      ) {
        const updatedData = [...prevState[dataType]];
        updatedData[index] = newData;
        return { ...prevState, [dataType]: updatedData };
      }

      return prevState; // Return previous state if no updates are needed
    });
  };

  const {
    generalInformation,
    programmingLanguages,
    frameworksAndLibraries,
    tools,
    languagesSpoken,
    workExperiences,
    projects,
    education,
  } = state;

  return (
    <div className="App">
      <div className="header">
        <h1>WEB DEV CV GENERATOR</h1>
      </div>
      <div className="content">
        <div className="component">
          <h2>General Information</h2>
          <GeneralInformation
            dataType="generalInformation"
            onDataChange={receiveStateData}
          ></GeneralInformation>
        </div>

        <div className="component">
          <div className="skills-header">
            <h2>Skills and Qualifications</h2>
            <h4>*type in a skill and press ENTER to add a skill tag</h4>
          </div>
          <div className="skill-tags">{state.skillElements}</div>
          <Skills
            addProgrammingLanguage={addProgrammingLanguage}
            addFramework={addFramework}
            addTool={addTool}
            addLanguageSpoken={addLanguageSpoken}
            addSkillElement={addSkillElement}
          ></Skills>
        </div>

        <div className="component">
          <h2>Work Experience</h2>
          <WorkExperience
            key={`work-instance-0`}
            index={0}
            dataType="workExperiences"
            onDataChange={receiveStateData}
          ></WorkExperience>
          {state.workExperienceAddedInstances}
          {state.workExperienceAddedInstances.length !== 0 && (
            <button className="delete" onClick={removeWorkExperience}>
              Delete
            </button>
          )}
          <button className="add" onClick={newWorkExperience}>
            Add
          </button>
        </div>

        <div className="component">
          <h2>Projects</h2>
          <Projects
            key={`project-instance-0`}
            index={0}
            dataType="projects"
            onDataChange={receiveStateData}
          ></Projects>
          {state.projectsAddedInstances}
          {state.projectsAddedInstances.length !== 0 && (
            <button className="delete" onClick={removeProject}>
              Delete
            </button>
          )}
          <button className="add" onClick={newProject}>
            Add
          </button>
        </div>

        <div className="component">
          <h2>Education</h2>
          <Education
            key={`education-instance-0`}
            index={0}
            dataType="education"
            onDataChange={receiveStateData}
          ></Education>
          {state.educationAddedInstances}
          {state.educationAddedInstances.length !== 0 && (
            <button className="delete" onClick={removeEducation}>
              Delete
            </button>
          )}
          <button className="add" onClick={newEducation}>
            Add
          </button>
        </div>

        <PDFDownloadLink
          document={
            <PDFFile
              key="pdf-file"
              generalInformation={generalInformation}
              programmingLanguages={programmingLanguages}
              frameworksAndLibraries={frameworksAndLibraries}
              tools={tools}
              languagesSpoken={languagesSpoken}
              workExperiences={workExperiences}
              projects={projects}
              education={education}
            />
          }
          filename="FORM"
          className="submit-button"
        >
          {({ loading }) =>
            loading ? (
              <button disabled className="submit-link">
                Generate PDF...
              </button>
            ) : (
              <button className="submit-link">Download PDF</button>
            )
          }
        </PDFDownloadLink>
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

export default App;
