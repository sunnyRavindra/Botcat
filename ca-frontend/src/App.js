import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Education  Education="fisrt Education" DegreeTitle="first Digree"/>
      <Education  Education="SecondDigree" DegreeTitle="Second Digree"/>
      <Education  Education="ThiredDigree" DegreeTitle="Thired Digree"/>
      <Container>
        <Routes>
          <Route exact path="/" component={Resume} />
          <Route path="/education" component={Education} />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
