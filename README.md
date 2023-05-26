# CV Project

This is my first react application. It is a web app that consists of s styled form that takes in user input regarding the users credentials, experience, ect. When the user clicks download pdf, a pdf is generated and downloaded by the users machine.

**_ May 26 2023 UPDATE _**
I updated this project by converting from class components to functional components.

**_ Process involved for completing this app _**

Prior to creating this app, I learned the fundamentals of react and I learned mainly how to use class components, which is why I implemented them. After building the class components and implementing them, I started to immediately see the benefits of React, namely the ease of use and reusability of components. Here is a list of steps that were involved in the creation of this app:

1. Run create react app and linking the local repository to a github remote repository
2. Create app components (general info, skills, work experience, projects, and education). These components would manage their own state, and render themselves onto the app.
3. Build the logic for the App component (add and delete buttons, state, onchange methods, ect.)
4. Change of design: have the state of the skills component be managed by the app component. This is because several things have to be managed for this component such as the user typing in skills in the different skill fields and pressing enter, which would then create a skill tag visible to the user. I found it easier for the parent app component to manage the state of the skills component because of this
5. Style the web app using a combination of a global css file, and individual css modules to style each component
6. Change of design: have the parent app component also manage the state of the all children components, and make use of callback functions in combination with the onDataChange attribute in order to be passed as a prop to the children components. The app component needs access to the data submitted by the user, which is why this was done.
7. Download and use an npm package react-pdf renderer in order to generate the pdf. This involved the creation of a new PDFFile component, which would be passed the state data of the app component as props to be used in the pdf.

**_ Challenges _**

The first challenge was getting used to the state of the class components, but mainly the figuring out the design of managing state and communicating that state data retrieved from the user to then be used in the pdf. As you can see from the steps taken to complete this project, I had to rework the logic a couple of times in order for this to work properly.

Css modules, although not that challenging, was a new concept to me. The main thing to understand was when to use css modules and when to use a general css file for general styling. I like this combination a lot, because it give me flexibility for styling and makes it hard to experience styling conflicts.

The main challenge however, was with the use of react-pdf renderer. Unfortunately, styling a pdf using this package can be quite difficult. Besides looking through the react-pdf renderer resources, I used the following youtube videos as references for finding my way around this tool, and would like to give them a shout out:

https://www.youtube.com/watch?v=JU7rfAMpbZA&list=PLurP1bGDFdaRf-u-UonqLn3ATUUirGYeL&index=6&t=594s

https://www.youtube.com/watch?v=HhLa-D0SXlI&list=PLurP1bGDFdaRf-u-UonqLn3ATUUirGYeL&index=7

**_ Future Potential Improvements _**

First and foremost, the pdf generated is still unfortunately not completely styled the way I wanted it to be. The main problem was that I could not figure out how to properly work flex-box in tandem with react-pdf renderer. I originally wanted the dates of the components to be on the same line as the first data of the components (ex: Job title for the work experience component), but spaced out all the way to the right of the page. I could not get this to work, and would like to eventually figure this out, or find another approach to rendering pdf's worst case scenario.

The final future improvement I can see implementing is input validation and form control (what fields need to be filled, character limits, and communicating all of this with the user). I would have liked to have implemented all of this in this version, but decided ultimately to leave it for another time considering time constraints and that the focus of this project was mainly the use of react.

# Built with

[React](https://react.dev/)<br>
[React-pdf](https://react-pdf.org/)<br>
[Styled-components](https://styled-components.com/)

# Instal and run

git clone git@github.com:roamingterra/cv-project.git<br>
cd cv-project<br>
npm install<br>
npm run start
