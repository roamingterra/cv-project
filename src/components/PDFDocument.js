import React from "react";
import { Component } from "react";
import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";
import robotoBold from "../fonts/Roboto-Bold.ttf";
import robotoRegular from "../fonts/Roboto-Regular.ttf";

Font.register({
  family: "Roboto-Regular",
  fonts: [{ src: robotoRegular }],
});

Font.register({
  family: "Roboto-Bold",
  fonts: [{ src: robotoBold }],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  generalInformation: {
    marginLeft: 12,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  skillsHeader: {
    fontSize: 18,
    textAlign: "center",
    textDecoration: "underline",
    fontFamily: "Roboto-Bold",
  },
  skills: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    fontSize: 14,
    textAlign: "left",
    lineHeight: "-8",
    fontFamily: "Roboto-Regular",
  },
  references: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 12,
    marginBottom: 20,
    fontFamily: "Roboto-Bold",
  },
});

class PDFFile extends Component {
  pageColors = ["#FFFFFF"];

  render() {
    const {
      generalInformation,
      programmingLanguages,
      frameworksAndLibraries,
      tools,
      languagesSpoken,
      workExperiences,
      projects,
      education,
    } = this.props;

    const programmingLanguageSeparated = programmingLanguages.join(" • ");
    const frameworksAndLibrariesSeparated = frameworksAndLibraries.join(" • ");
    const toolsSeparated = tools.join(" • ");
    const languagesSpokenSeparated = languagesSpoken.join(" • ");

    return (
      <Document>
        <Page
          style={{
            ...styles.body,
          }}
        >
          {/* Render name as the title */}
          <Text style={styles.title}>
            {generalInformation.firstName} {generalInformation.lastName}
          </Text>

          {/* Render General Information */}
          <Text style={styles.generalInformation}>
            {generalInformation.phoneNumber} | {generalInformation.email}
          </Text>
          <Text style={styles.generalInformation}>
            {generalInformation.linkedIn}
          </Text>
          <Text style={styles.generalInformation}>
            {generalInformation.gitHub}
          </Text>
          <Text>{"\n"}</Text>

          {/* Render Skills and Qualifications */}
          <Text style={styles.skillsHeader}>
            SUMMARY OF SKILLS AND QUALIFICATIONS{"\n"}
          </Text>
          <Text style={styles.skills}>
            Programming Languages | {programmingLanguageSeparated}
          </Text>
          <Text style={styles.skills}>
            Frameworks And Libraries | {frameworksAndLibrariesSeparated}
          </Text>
          <Text style={styles.skills}>Tools | {toolsSeparated}</Text>
          <Text style={styles.skills}>
            Languages Spoken | {languagesSpokenSeparated}
          </Text>
          <Text>
            {"\n"}
            {"\n"}
          </Text>

          {/* Render work experiences */}
          <Text style={styles.header}>WORK EXPERIENCE{"\n"}</Text>
          {workExperiences.map((experience, index) => (
            <Text key={index} style={styles.text}>
              <Text style={{ fontFamily: "Roboto-Bold" }}>
                {experience.jobTitle}
              </Text>
              {"\n"}
              <Text>
                {experience.startDate} - {experience.endDate}
              </Text>
              {"\n"}
              <Text>
                {experience.companyName}, {experience.companyLocation}
              </Text>
              <Text>{"\n"}</Text>
              <Text>{experience.responsibilities}</Text>
              {"\n"}
              {"\n"}
            </Text>
          ))}

          {/* Render projects */}
          <Text style={styles.header}>PROJECTS{"\n"}</Text>
          {projects.map((project, index) => (
            <Text key={index} style={styles.text}>
              {project.projectTitle}, {project.projectLocation}
              {"\n"}
              {project.startDate} - {project.endDate}
              {"\n"}
              {project.responsibilities}
              {"\n"}
              {"\n"}
            </Text>
          ))}

          {/* Render education */}
          <Text style={styles.header}>EDUCATION{"\n"}</Text>
          {education.map((education, index) => (
            <Text key={index} style={styles.text}>
              {education.titleOfStudy}
              {"\n"}
              {education.startDate} - {education.endDate}
              {"\n"}
              {education.nameOfInstitution}, {education.institutionLocation}
              {"\n"}
              {"\n"}
            </Text>
          ))}
          <Text style={styles.references}>
            {"\n"}
            {"\n"}***REFERENCES AVAILABLE UPON REQUEST***
          </Text>
        </Page>
      </Document>
    );
  }
}

export default PDFFile;
