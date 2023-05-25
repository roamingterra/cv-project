import React, { useState, useEffect } from "react";
import generalInfoCss from "./../styles/generalInformation.module.css";

function GeneralInformation(props) {
  const [dataType, setDataType] = useState("");

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
    gitHub: "",
  });

  useEffect(() => {
    const { dataType } = props;
    // Now you can use the dataType prop safely
    setDataType(dataType);
  });

  const updateFirstName = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, firstName: value }));
    props.onDataChange(state, dataType);
  };

  const updateLastName = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, lastName: value }));
    props.onDataChange(state, dataType);
  };

  const updatePhoneNumber = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, phoneNumber: value }));
    props.onDataChange(state, dataType);
  };

  const updateEmail = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, email: value }));
    props.onDataChange(state, dataType);
  };

  const updateLinkedIn = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, linkedIn: value }));
    props.onDataChange(state, dataType);
  };

  const updateGitHub = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, gitHub: value }));
    props.onDataChange(state, dataType);
  };

  return (
    <div className={generalInfoCss.container}>
      <form>
        <div className={generalInfoCss.form}>
          <input
            type="text"
            onChange={updateFirstName}
            placeholder="First Name"
            className={generalInfoCss.input}
          ></input>
          <input
            type="text"
            onChange={updateLastName}
            placeholder="Last Name"
            className={generalInfoCss.input}
          ></input>
          <input
            type="tel"
            onChange={updatePhoneNumber}
            placeholder="Phone Number"
            className={generalInfoCss.input}
          ></input>
          <input
            type="email"
            onChange={updateEmail}
            placeholder="Email"
            className={generalInfoCss.input}
          ></input>
          <input
            type="url"
            onChange={updateLinkedIn}
            placeholder="LinkedIn"
            className={generalInfoCss.input}
          ></input>
          <input
            type="url"
            onChange={updateGitHub}
            placeholder="GitHub"
            className={generalInfoCss.input}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default GeneralInformation;
