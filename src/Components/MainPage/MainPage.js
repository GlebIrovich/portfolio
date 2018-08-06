import React from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import Bio from '../Bio/Bio';
import HelloWorld from '../HelloWorld/HelloWorld';

const MainPage = ({ location }) => (
  <Row>
    <Col lg="3">
      <Sidebar className="closed-left" position="_left" location={location} />
    </Col>
    <Col lg="4">
      <Bio />
    </Col>
    <Col className="order-first  order-lg-last">
      <HelloWorld />
    </Col>
  </Row>
);

export default MainPage;
