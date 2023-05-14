import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Resume} />
          <Route path="/education" component={Education} />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
