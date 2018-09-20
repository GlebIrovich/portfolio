import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import file from './gleb_irovich.pdf';
import './Bio.css';
import './i_like.css';
import './i_hate.css';

const Bio = () => (
  <div className="pt-3">
    <h3 className="text-dark-grey mt-3 mb-4 pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0 ">
      Hey there!
    </h3>
    <div className="bio__text mt-2 mt-md-3 mt-lg-5">
      <p className="text-dark-grey pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0">
        Welcome to a tiny piece of the web, that I can call my own. Here are some facts, you should
        know about me.
      </p>
      <Row>
        <Col lg="12" md="6">
          <p className="text-dark-grey pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0">
            <strong className="">
I LOVE:
            </strong>
          </p>

          <ul className="my-list pt-2 pl-5 pl-lg-0 pr-5 pr-lg-0 text-dark-grey">
            <li>
              <span className="i_like icon-pizza" role="img" aria-label="Pizza" />
              {' '}
pizza
            </li>

            <li>
              <span className="i_like icon-coding" role="img" aria-label="Coding" />
              {' '}
coding
            </li>
            <li>
              <span className="i_like icon-peak" role="img" aria-label="Challenge" />
              {' '}
challenges
            </li>
            <li>
              <span className="i_like icon-algorithm" role="img" aria-label="Web application" />
              {' '}
              creating for web
            </li>
            <li>
              <span className="i_like icon-film-reel" role="img" aria-label="Movies" />
              {' '}
Marvel
              movies
            </li>
            <li>
              <span className="i_like icon-gamepad" role="img" aria-label="Gamepad" />
              {' '}
video games
            </li>
            <li>
              <span className="i_like icon-folder-open" role="img" aria-label="Folder" />
              {' '}
order on
              my desktop
            </li>
            <li>
              <span className="i_like icon-briefcase" role="img" aria-label="Airplane" />
              {' '}
travelling
            </li>
          </ul>
        </Col>
        <Col lg="12" md="6">
          <p className="text-dark-grey pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0">
            <strong>
I HATE:
            </strong>
          </p>
          <ul className="my-list pt-2 pl-5 pl-lg-0 pr-5 pr-lg-0 text-dark-grey">
            <li>
              <span className="i_hate icon-team" role="img" aria-label="Group" />
              {' '}
queues
            </li>

            <li>
              <span className="i_hate icon-phone" role="img" aria-label="Phone" />
              {' '}
phone
              conversations
            </li>
            <li>
              <span className="i_hate icon-salon-chair" role="img" aria-label="Seat" />
              {' '}
airplane
              seats
            </li>
            <li>
              <span className="i_hate icon-sauna" role="img" aria-label="Z-z-z" />
              {' '}
doing nothing
            </li>
            <li>
              <span className="i_hate icon-work" role="img" aria-label="Writing" />
              {' '}
writing
              self-introductions
            </li>
          </ul>
        </Col>
      </Row>

      <p className="text-dark-grey pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0">
        I believe that your idea
        {' '}
        <strong className="text-dark-grey">
must
        </strong>
        {' '}
be turned into
        life. Click one of the links below and tell me how I can help.
      </p>
    </div>

    <h3 className="text-dark-grey mt-5 pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0 ">
      Let’s keep in touch!
    </h3>

    <h4 className="text-dark-grey mt-5 mb-5 pl-3 pl-sm-5 pl-lg-0 pr-3 pr-sm-5 pr-lg-0">
      <a href="https://github.com/cookiehunter22" className="my-link" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="" />
      </a>
      <a href="mailto:gleb.irovich@gmail.com" className="my-link" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/gleb-irovich-001037bb/"
        className="my-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="ml-2" />
      </a>
      <a href={file} className="my-link" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} className="ml-2" />
      </a>
    </h4>
  </div>
);

export default Bio;

// <ul className="my-list pt-2 pl-5 pl-lg-1 pr-5 pr-lg-0 text-dark-grey">
//             <li>
//               <span role="img" aria-label="Pizza">
//                 🍕
//               </span>
//               <span className="icon-pizza" role="img" aria-label="Pizza" />
//               {' '}
// pizza
//             </li>

//             <li>
//               <span role="img" aria-label="Coding">
//                 👨‍💻
//               </span>
//               {' '}
//               coding
//             </li>
//             <li>
//               <span role="img" aria-label="Challenges">
//                 😅
//               </span>
//               {' '}
//               challenges
//             </li>
//             <li>
//               <span role="img" aria-label="Creating web">
//                 🎛️
//               </span>
//               {' '}
//               creating web applications
//             </li>
//             <li>
//               <span role="img" aria-label="Movies">
//                 🎬
//               </span>
//               {' '}
//               Marvel movies
//             </li>
//             <li>
//               <span role="img" aria-label="Joystick">
//                 🕹️
//               </span>
//               {' '}
//               video games
//             </li>
//             <li>
//               <span role="img" aria-label="Laptop">
//                 💻
//               </span>
//               {' '}
//               order on my desktop
//             </li>
//             <li>
//               <span role="img" aria-label="Airplane">
//                 ✈️
//               </span>
//               {' '}
//               travelling
//             </li>
//           </ul>
