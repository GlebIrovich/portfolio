import React from 'react';
import './MainZone.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainPage from '../MainPage/MainPage';
import SkillsPage from '../SkillsPage/SkillsPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

const MainZone = ({ location }) => (
  <div id="main-zone">
    {/* <div id="dashed-line" className="position-absolute" /> */}
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={600}
        classNames="fade"
        exit={false}
        style={{
          transitionDelay: 4000,
        }}
      >
        <Switch location={location}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/projects" component={ProjectsPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

export default withRouter(MainZone);

// <Switch>
//       <Route exact path="/" component={MainPage} />
//       <Route exact path="/skills" component={SkillsPage} />
//       <Route exact path="/projects" component={ProjectsPage} />
//     </Switch>
