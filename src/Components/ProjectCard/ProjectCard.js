import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

class ProjectCard extends React.PureComponent {
  render() {
    const { text, title, className } = this.props;
    return (
      <div className={`project__card mx-auto text-dark-grey pt-3 pr-3 pb-3 pl-3 ${className}`}>
        <h4 className="text-center text-dark">
          {title}
        </h4>
        <p className="mt-4">
          {text}
        </p>
        <h4 className="text-dark text-right mb-0 mt-5 pl-2 pr-2 ">
          <FontAwesomeIcon icon={faGithub} className="" />
          <FontAwesomeIcon icon={faLink} className="ml-2" />
        </h4>
      </div>
    );
  }
}

export default ProjectCard;
