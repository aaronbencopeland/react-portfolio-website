import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// To clean up imports: Shift + Alt + o

function NavigationBar() {

  // React-Bootstrap Navbar templates available at https://react-bootstrap.github.io/components/navbar/
  return (
    <>
      {/* The expand="sm"...*/}
      {/* Note that this is the syntax required to make a comment within JSX!  Note that it contains backslash and asterick combinations within a pair of curly brackets */}
      <Navbar collapseOnSelect expand="sm" bg="black" variant="dark">
        {/* bg = dark and variant = dark */}
        <Navbar.Toggle aria controls="navbarScroll" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Brand href="/"><img src="https://c4.wallpaperflare.com/wallpaper/22/74/535/hulk-wallpaper-preview.jpg" width="40" height="50" alt="React Image" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar