import React from "react";
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

function PDFFile(props) {
  const {
    generalInformation,
    programmingLanguages,
    frameworksAndLibraries,
    tools,
    languagesSpoken,
    workExperiences,
    projects,
    education,
  } = props;

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
        <Text style={{ ...styles.skills, fontFamily: "Roboto-Bold" }}>
          Programming Languages |{" "}
          <Text style={styles.skills}>{programmingLanguageSeparated}</Text>
        </Text>
        <Text style={{ ...styles.skills, fontFamily: "Roboto-Bold" }}>
          Frameworks And Libraries |{" "}
          <Text style={styles.skills}>{frameworksAndLibrariesSeparated}</Text>
        </Text>
        <Text style={{ ...styles.skills, fontFamily: "Roboto-Bold" }}>
          Tools | <Text style={styles.skills}>{toolsSeparated}</Text>
        </Text>
        <Text style={{ ...styles.skills, fontFamily: "Roboto-Bold" }}>
          Languages Spoken |{" "}
          <Text style={styles.skills}>{languagesSpokenSeparated}</Text>
        </Text>
        <Text>
          {"\n"}
          {"\n"}
        </Text>

        {/* Render work experiences */}
        <Text style={styles.header}>WORK EXPERIENCE{"\n"}</Text>
        {workExperiences.map((experience, index) => (
          <Text key={`work-experience-pdf-${index}`} style={styles.text}>
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
          <Text style={styles.text} key={`project-pdf-${index}`}>
            <Text style={{ fontFamily: "Roboto-Bold" }}>
              {project.projectTitle},{" "}
            </Text>
            <Text style={styles.text}>
              {project.projectLocation}
              {"\n"}
            </Text>
            <Text>
              {project.startDate} - {project.endDate}
              {"\n"}
            </Text>
            <Text>
              {project.responsibilities}
              {"\n"}
              {"\n"}
            </Text>
          </Text>
        ))}

        {/* Render education */}
        <Text style={styles.header}>EDUCATION{"\n"}</Text>
        {education.map((education, index) => (
          <Text style={styles.text} key={`education-pdf-${index}`}>
            <Text style={{ fontFamily: "Roboto-Bold" }}>
              {education.titleOfStudy}
              {"\n"}
            </Text>
            <Text>
              {education.startDate} - {education.endDate}
              {"\n"}
            </Text>
            <Text>
              {education.nameOfInstitution}, {education.institutionLocation}
              {"\n"}
              {"\n"}
            </Text>
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

export default PDFFile;
