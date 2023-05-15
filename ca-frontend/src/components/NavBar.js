import React from 'react';
import { Nav } from 'react-bootstrap';
import '../App.css'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Nav className='navbar' variant="pills">
      <LinkContainer to="/">
        <Nav.Link>Summary</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/education">
        <Nav.Link>Education</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/work-experience">
        <Nav.Link>Work Experience</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/skills">
        <Nav.Link>Skills</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/projects">
        <Nav.Link>Projects</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}

export default NavBar;