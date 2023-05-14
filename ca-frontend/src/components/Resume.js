import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Resume = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src="path-to-profile-image" roundedCircle />
          <h2>Your Name</h2>
          <p>Your Email</p>
          <p>Your Phone Number</p>
        </Col>
        <Col md={8}>
          <h3>Summary</h3>
          <p>Your Brief Introduction</p>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <h3>Education</h3>
          <h4>Degree Title</h4>
          <p>University Name, Graduation Date</p>
        </Col>
        <Col md={4}>
          <h3>Skills</h3>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <h3>Work Experience</h3>
          <h4>Job Title</h4>
          <p>Employer Name, Employment Dates</p>
          <ul>
            <li>Job Duty 1</li>
            <li>Job Duty 2</li>
            <li>Job Duty 3</li>
          </ul>
        </Col>
        <Col md={4}>
          <h3>Projects</h3>
          <ul>
            <li><a href="link-to-project-1">Project 1 Title</a></li>
            <li><a href="link-to-project-2">Project 2 Title</a></li>
            <li><a href="link-to-project-3">Project 3 Title</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;