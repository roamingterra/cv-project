import React, { Component } from "react";

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
      <div>
        <form>
          <div>
            <label>Programming Languages</label>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(
                  event,
                  addProgrammingLanguage,
                  addSkillElement
                )
              }
            ></input>
            <label>Frameworks and Libraries</label>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(event, addFramework, addSkillElement)
              }
            ></input>
            <label>Tools</label>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(event, addTool, addSkillElement)
              }
            ></input>
            <label>Languages Spoken</label>
            <input
              type="text"
              onKeyDown={(event) =>
                this.handlePressEnter(event, addLanguageSpoken, addSkillElement)
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Skills;
