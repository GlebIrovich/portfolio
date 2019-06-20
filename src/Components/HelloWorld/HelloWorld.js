import './HelloWorld.css';

import React from 'react';
import { Col, Row } from 'reactstrap';

import photo from './me.png';

const HelloWorld = () => (
  <div className="h-100" id="introduction">
    <Row className="h-50">
      <Col>
        <img src={photo} alt="" align="right" className="clip-circle" />
      </Col>
    </Row>
    <Row className="text-right h-50">
      <Col className="align-self-end">
        <div id="my-name" className="pr-2 pr-lg-5 pb-3">
          <h1 className="text-dark-grey">
Hello World!
          </h1>
          <hr className="mr-0 mt-0 bg-mid-grey border-0" style={{ height: 2, width: 295 }} />
          <h3 className="text-mid-grey">
            my name is
            {' '}
            <span className="text-pinky-red">
Gleb Irovich
            </span>
          </h3>
          <hr className="mr-0 mt-0 bg-mid-grey border-0" style={{ height: 2, width: 295 }} />

          <h4 className="text-mid-grey">
I am a Frontend Engineer
          </h4>
          <hr className="mr-0 mt-0 bg-mid-grey border-0" style={{ height: 2, width: 295 }} />
        </div>
      </Col>
    </Row>
  </div>
);

export default HelloWorld;
