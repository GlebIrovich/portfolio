import React from 'react';
import { Row, Col } from 'reactstrap';
// import Swipe from 'react-swipe-component';
import Swipeable from 'react-swipeable';
import Sidebar from '../Sidebar/Sidebar';
import './ProjectPage.css';
import CardsList from '../CardsList/CardsList';
import HelloWorld from '../HelloWorld/HelloWorld';

const projects = {
  1: {
    id: 1,
    title: 'Project 1',
    text: 'text p1',
  },
  2: {
    id: 2,
    title: 'Project 2',
    text: 'text p2',
  },
  3: {
    id: 3,
    title: 'Project 3',
    text: 'text p3',
  },
  4: {
    id: 4,
    title: 'Project 4',
    text: 'text p4',
  },
  5: {
    id: 5,
    title: 'Project 5',
    text: 'text p5',
  },
};

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectOrder: [1, 2, 3, 4, 5],
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onSwipeLeftListener = () => {
    this.next();
  };

  onSwipeRightListener = () => {
    this.prev();
  };

  handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.prev();
    }
  };

  next = () => {
    const { projectOrder } = this.state;

    projectOrder.unshift(projectOrder[projectOrder.length - 1]);
    projectOrder.pop();

    this.setState({
      projectOrder,
    });
  };

  prev = () => {
    const { projectOrder } = this.state;
    projectOrder.push(projectOrder[0]);
    projectOrder.shift();
    this.setState({
      projectOrder,
    });
  };

  render() {
    const { projectOrder } = this.state;
    const { location } = this.props;

    return (
      <Swipeable
        preventDefaultTouchmoveEvent
        onSwipedLeft={this.next}
        onSwipedRight={this.prev}
        className="swipe-zone"
        trackMouse
      >
        <Row className="d-lg-none">
          <Col className="order-first">
            <HelloWorld />
          </Col>
        </Row>
        <Row>
          <Col className="col-cards">
            <CardsList projectOrder={projectOrder} projects={projects} />
            <div id="controls" className="text-center">
              <span tabIndex="-1" role="button" className="dot mr-2" onClick={this.prev} />
              <span tabIndex="-1" role="button" className="dot" onClick={this.next} />
            </div>
          </Col>
          <Col lg="3" className="order-first  order-lg-last">
            <Sidebar className="closed-right" position="_right" location={location} />
          </Col>
        </Row>
      </Swipeable>
    );
  }
}

export default ProjectsPage;

//  { /*  <Swipe
//         onSwipedLeft={this.onSwipeLeftListener}
//         onSwipedRight={this.onSwipeRightListener}
//         className="swipe-zone"
//         mouseSwipe
//       > */}
//  { /* </Swipe> */   }
