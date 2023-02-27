import React from 'react'
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
    <h1> Skills</h1>
    <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
          ReactJS, Angular, Redux, HTML, CSS, React Native, NPM,
          BootStrap
        </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          NodeJS, ExpressJS, Java Spring
          MySQL, MongoDB, Oracle, SQL, NoSQL, AWS
        </span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span>JavaScript, TypeScript, Java, Python, C, C++</span>
      </li>
    </ol>
    <br /><br /><br /><br />
  </div>
  )
}

export default Skills