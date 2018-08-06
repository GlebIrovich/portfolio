import React from 'react';
import { Container } from 'reactstrap';
import './Postcard.css';
import MainZone from '../MainZone/MainZone';

const Postcard = () => (
  <Container id="postcard" className="mt-lg-5 mt-md-2 mb-0 mb-md-5 pt-3 pr-3 pb-3 pl-3 ">
    <MainZone />
  </Container>
);

export default Postcard;
