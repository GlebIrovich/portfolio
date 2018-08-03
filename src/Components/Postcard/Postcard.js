import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Postcard.css';
import MainZone from '../MainZone/MainZone';

export default class Postcard extends Component {
  render() {
    return (
      <Container id="postcard" className="mt-lg-5 mt-md-2 mb-0 mb-md-5 pt-3 pr-3 pb-3 pl-3 ">
        <MainZone />
      </Container>
    );
  }
}
