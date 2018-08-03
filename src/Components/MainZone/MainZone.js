import React from 'react';
import './MainZone.css';
import { Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import Bio from '../Bio/Bio';
import HelloWorld from '../HelloWorld/HelloWorld';

class MainZone extends React.Component {
  render() {
    const { containerWidth } = this.props;
    return (
      <div id="main-zone">
        {/* <div id="dashed-line" className="position-absolute" /> */}
        <Row>
          <Col lg="3">
            <Sidebar width={containerWidth} />
          </Col>
          <Col lg="4">
            <Bio />
          </Col>
          <Col className="order-first  order-lg-last">
            <HelloWorld />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainZone;
