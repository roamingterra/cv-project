import React, { useState, useEffect } from "react";
import educationCss from "./../styles/education.module.css";

function Education(props) {
  const [dataType, setDataType] = useState("");
  const [index, setIndex] = useState(0);

  const [state, setState] = useState({
    titleOfStudy: "",
    nameOfInstitution: "",
    institutionLocation: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const { index, dataType } = props;
    // Now you can use the index prop safely
    setIndex(index);
    setDataType(dataType);
  });

  const updateTitleOfStudy = (event) => {
    const { value } = event.target;
    setState({ ...state, titleOfStudy: value });
    props.onDataChange(state, dataType, index);
  };

  const updateNameOfInstitution = (event) => {
    const { value } = event.target;
    setState({ ...state, nameOfInstitution: value });
    props.onDataChange(state, dataType, index);
  };

  const updateInstitutionLocation = (event) => {
    const { value } = event.target;
    setState({ ...state, institutionLocation: value });
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

  return (
    <div className={educationCss.container}>
      <form>
        <div className={educationCss.form}>
          <input
            type="text"
            onChange={updateTitleOfStudy}
            placeholder="Title of Study"
            className={`${educationCss.input} ${educationCss.title}`}
          ></input>
          <input
            type="text"
            onChange={updateNameOfInstitution}
            placeholder="Name of Institution"
            className={educationCss.input}
          ></input>
          <input
            type="text"
            onChange={updateInstitutionLocation}
            placeholder="Institution Location"
            className={educationCss.input}
          ></input>
          <input
            type="text"
            onChange={updateStartDate}
            placeholder="Start Date"
            className={educationCss.input}
          ></input>
          <input
            type="text"
            onChange={updateEndDate}
            placeholder="End Date"
            className={educationCss.input}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Education;
