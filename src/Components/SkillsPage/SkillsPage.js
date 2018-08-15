import React from 'react';
import { Row, Col } from 'reactstrap';

import shuffle from 'lodash.shuffle';
import Sidebar from '../Sidebar/Sidebar';
import HelloWorld from '../HelloWorld/HelloWorld';
import SkillBox from '../SkillBox/SkillBox';
import './SkillsPage.css';

class SkillsPage extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { location } = nextProps;

    if (location.pathname === '/skills') return false;
    return true;
  }

  render() {
    const { location, history } = this.props;
    return (
      <React.Fragment>
        <Row className="d-lg-none">
          <Col className="order-first">
            <HelloWorld />
          </Col>
        </Row>
        <Row>
          <Col className="">
            <div className="pb-4 pr-3 h-100 mx-auto text-center mt-lg-5">
              {shuffle([
                <SkillBox text="JS" key={0} index={0} />,
                <SkillBox text="React js" key={1} index={1} />,
                <SkillBox text="Express js" key={2} index={2} />,
                <SkillBox text="Git" key={3} index={3} />,
                <SkillBox text="CSS" key={4} index={4} />,
                <SkillBox text="HTML" key={5} index={5} />,
                <SkillBox text="Adobe" key={6} index={6} />,
                <SkillBox text="Bootstrap 4" key={7} index={7} />,
                <SkillBox text="Python" key={8} index={8} />,
                <SkillBox text="Django" key={9} index={9} />,
                <SkillBox text="Falcon" key={10} index={10} />,
              ])}
            </div>
          </Col>
          <Col lg="3" className="order-first  order-lg-last">
            <Sidebar
              className="closed-right"
              position="_right"
              location={location}
              history={history}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SkillsPage;
