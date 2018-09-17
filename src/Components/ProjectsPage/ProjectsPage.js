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
    title: 'Homepage for lecture slides',
    text:
      'A web application developed for the University of Zurich. The main goal is to provide an opportunity to host lecture slides offered by the Chair of Marketing on the dedicated web page. The app also allows to comment on every slide and generate activity reports.',
    links: {
      gh: 'https://github.com/cookiehunter22/react-server-slideshow',
      demo: 'https://test-uzh.herokuapp.com/',
    },
  },
  2: {
    id: 2,
    title: 'NewsFeeder',
    text:
      'A widget that will display news on your web page. Articles are posted via the Telegram bot. The goal is to rethink the CMS for small tasks (such as posting articles), create an easy-to-integrate widget, that can be remotely controlled via a messenger. NewsFeeder is optimized for small screens, uses Cloudinary to transform and serve images and supports Markdown syntax for the article body.',
    links: {
      gh: 'https://github.com/cookiehunter22/newsfeeder',
      demo: 'https://cookiehunter22.github.io/newsfeeder/dist/',
    },
  },
  3: {
    id: 3,
    title: 'Jammming',
    text:
      'A capstone project for the Codeacaemy intensive course. This app is powered by React js and employs Spotify API to search for songs and create new playlists in your Spotify library.',
    links: {
      gh: 'https://github.com/cookiehunter22/jammming',
      demo: 'https://jammming-project.herokuapp.com/',
    },
  },
  5: {
    id: 5,
    title: 'The Void Game',
    text:
      'A browser game, powered by React js. You will have to memorize the path and lead your spaceship through the space full of darkness and danger.',
    links: {
      gh: 'https://github.com/cookiehunter22/the-void',
      demo: 'https://cookiehunter22.github.io/the-void/',
    },
  },
  4: {
    id: 4,
    title: 'Responsive website with integrated CMS',
    text:
      'A responsive website design for the Fund of Nikolay Rastorguev with fully integrated Keystone js CMS. Fully editable content, dynamic page generation based on the provided texts and images and user-friendly admin interface. Images are served from the Cloudinary, giving an endless opportunity to experiment, edit and resize on the fly.',
    links: {
      gh: '',
      demo: 'http://nr-fund.ru/',
    },
  },
};

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectOrder: [1, 2, 3, 4],
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
    const { location, history } = this.props;

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
            <Sidebar
              className="closed-right"
              position="_right"
              location={location}
              history={history}
            />
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
