import React from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import HelloWorld from '../HelloWorld/HelloWorld';
import SkillBox from '../SkillBox/SkillBox';
import './SkillsPage.css';

const SkillsPage = ({ location }) => (
  <React.Fragment>
    <Row className="d-lg-none">
      <Col className="order-first">
        <HelloWorld />
      </Col>
    </Row>
    <Row>
      <Col className="">
        <div className="pb-4 pr-3 h-100 mx-auto text-center mt-lg-5">
          <SkillBox text="JS" index={0} />
          <SkillBox text="React js" index={1} />
          <SkillBox text="Express js" index={2} />
          <br />
          <SkillBox text="Git" small index={3} />
          <SkillBox text="CSS" small index={4} />
          <SkillBox text="HTML" small index={5} />
          <SkillBox text="Adobe" small index={6} />
          <SkillBox text="Bootstrap 4" small index={7} />
          <br />
          <SkillBox text="Python" index={8} />
          <SkillBox text="Django" index={9} />
          <SkillBox text="Falcon" index={10} />
        </div>
      </Col>
      <Col lg="3" className="order-first  order-lg-last">
        <Sidebar className="closed-right" position="_right" location={location} />
      </Col>
    </Row>
  </React.Fragment>
);

export default SkillsPage;
