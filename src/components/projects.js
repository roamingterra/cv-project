import React, { useState, useEffect } from "react";
import projectsCss from "./../styles/projects.module.css";

function Projects(props) {
  const [dataType, setDataType] = useState("");
  const [index, setIndex] = useState(0);

  const [state, setState] = useState({
    projectTitle: "",
    projectLocation: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  useEffect(() => {
    const { index, dataType } = props;
    // Now you can use the index prop safely
    setIndex(index);
    setDataType(dataType);
  });

  const updateProjectTitle = (event) => {
    const { value } = event.target;
    setState({ ...state, projectTitle: value });
    props.onDataChange(state, dataType, index);
  };

  const updateProjectLocation = (event) => {
    const { value } = event.target;
    setState({ ...state, projectLocation: value });
    props.onDataChange(state, dataType, index);
  };

  const updateStartDate = (event) => {
    const { value } = event.target;
    setState({ ...state, startDate: value });
    props.onDataChange(state, dataType, index);
  };

  const updateEndDate = (event) => {
    const { value } = event.target;
    setState({ ...state, endDate: value });
    props.onDataChange(state, dataType, index);
  };

  const updateResponsibilities = (event) => {
    const { value } = event.target;
    setState({ ...state, responsibilities: value });
    props.onDataChange(state, dataType, index);
  };

  return (
    <div className={projectsCss.container}>
      <form>
        <div className={projectsCss.form}>
          <input
            type="text"
            onChange={updateProjectTitle}
            placeholder="Project Title"
            className={projectsCss.input}
          ></input>
          <input
            type="text"
            onChange={updateProjectLocation}
            placeholder="Project Location"
            className={projectsCss.input}
          ></input>
          <input
            type="text"
            onChange={updateStartDate}
            placeholder="Start Date"
            className={projectsCss.input}
          ></input>
          <input
            type="text"
            onChange={updateEndDate}
            placeholder="End Date"
            className={projectsCss.input}
          ></input>
          <textarea
            onChange={updateResponsibilities}
            placeholder="Responsibilities"
            className={`${projectsCss.input} ${projectsCss.responsibilities}`}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Projects;
