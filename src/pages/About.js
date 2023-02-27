import React from 'react'
import { Image } from 'react-bootstrap'

function About() {
  let name = "Aaron";

  return (
    <div>
      <div className="">
        <div className="">
          <h2> Hi, My Name is {name}</h2>
          <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
            {/* <LinkedInIcon />
        <EmailIcon />
        <GithubIcon /> */}
          </div>
          <Image src="https://cdn.britannica.com/79/20279-050-ECDF21A7/mountain-gorilla-Virunga-National-Park-Democratic-Republic.jpg" width="500" height="500" alt="React Image" roundedCircle />
        </div>
      </div>
    </div>
  )
}

export default About