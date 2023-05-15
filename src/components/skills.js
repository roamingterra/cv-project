import React, { Component } from "react";
import skillsCss from "./../styles/skills.module.css";

class Skills extends Component {
  handlePressEnter = async (event, addToStateMethod, addSkillElement) => {
    try {
      const skillInfo = await addToStateMethod(event);
      addSkillElement(skillInfo);
    } catch (error) {}
  };

  render() {
    const {
      addProgrammingLanguage,
      addFramework,
      addTool,
      addLanguageSpoken,
      addSkillElement,
    } = this.props;

    return (
      <div className={skillsCss.container}>
        <form>
          <div className={skillsCss.form}>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(
                  event,
                  addProgrammingLanguage,
                  addSkillElement
                )
              }
              placeholder="Programming Languages"
              className={skillsCss.input}
            ></input>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(event, addFramework, addSkillElement)
              }
              placeholder="Frameworks and Libraries"
              className={skillsCss.input}
            ></input>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(event, addTool, addSkillElement)
              }
              placeholder="Tools"
              className={skillsCss.input}
            ></input>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(event, addLanguageSpoken, addSkillElement)
              }
              placeholder="Languages Spoken"
              className={skillsCss.input}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Skills;
