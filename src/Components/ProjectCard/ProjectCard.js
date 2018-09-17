import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

class ProjectCard extends React.PureComponent {
  renderGh = () => {
    const { project } = this.props;
    if (project.links.gh) {
      return (
        <a href={project.links.gh} target="_blank" className="">
          <FontAwesomeIcon icon={faGithub} className="" />
        </a>
      );
    }
  };

  render() {
    const { className, project } = this.props;
    return (
      <div className={`project__card mx-auto text-dark-grey pt-3 pr-3 pb-3 pl-3 ${className}`}>
        <h4 className="text-center text-dark">
          {project.title}
        </h4>
        <p className="mt-4">
          {project.text}
        </p>
        <h4 className="text-right mb-0 mt-5 pl-2 pr-2 ">
          {this.renderGh()}
          <a href={project.links.demo} target="_blank" className="">
            <FontAwesomeIcon icon={faLink} className="ml-2" />
          </a>
        </h4>
      </div>
    );
  }
}

export default ProjectCard;
