import React from 'react';
import './MainZone.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SkillsPage from '../SkillsPage/SkillsPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

const MainZone = () => (
  <div id="main-zone">
    {/* <div id="dashed-line" className="position-absolute" /> */}
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/skills" component={SkillsPage} />
      <Route exact path="/projects" component={ProjectsPage} />
    </Switch>
  </div>
);

export default MainZone;
