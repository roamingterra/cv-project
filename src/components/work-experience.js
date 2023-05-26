import React, { useState, useEffect } from "react";
import workExperienceCss from "./../styles/workExperience.module.css";

function WorkExperience(props) {
  const [dataType, setDataType] = useState("");
  const [index, setIndex] = useState(props.index);

  const [state, setState] = useState({
    jobTitle: "",
    companyName: "",
    companyLocation: "",
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

  const updateJobTitle = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, jobTitle: value }));
    props.onDataChange({ ...state, jobTitle: value }, dataType, index);
  };

  const updateCompanyName = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, companyName: value }));
    props.onDataChange({ ...state, companyName: value }, dataType, index);
  };

  const updateCompanyLocation = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, companyLocation: value }));
    props.onDataChange({ ...state, companyLocation: value }, dataType, index);
  };

  const updateStartDate = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, startDate: value }));
    props.onDataChange({ ...state, startDate: value }, dataType, index);
  };

  const updateEndDate = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, endDate: value }));
    props.onDataChange({ ...state, endDate: value }, dataType, index);
  };

  const updateResponsibilities = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, responsibilities: value }));
    props.onDataChange({ ...state, responsibilities: value }, dataType, index);
  };

  console.log(index);
  return (
    <div className={workExperienceCss.container}>
      <form>
        <div className={workExperienceCss.form}>
          <input
            type="text"
            onChange={updateJobTitle}
            placeholder="Job Title"
            className={`${workExperienceCss.input} ${workExperienceCss.title}`}
          ></input>
          <input
            type="text"
            onChange={updateCompanyName}
            placeholder="Company Name"
            className={workExperienceCss.input}
          ></input>
          <input
            type="text"
            onChange={updateCompanyLocation}
            placeholder="Company Location"
            className={workExperienceCss.input}
          ></input>
          <input
            type="text"
            onChange={updateStartDate}
            placeholder="Start Date"
            className={workExperienceCss.input}
          ></input>
          <input
            type="text"
            onChange={updateEndDate}
            placeholder="End Date"
            className={workExperienceCss.input}
          ></input>
          <textarea
            onChange={updateResponsibilities}
            placeholder="Responsibilities"
            className={`${workExperienceCss.input} ${workExperienceCss.responsibilities}`}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default WorkExperience;
