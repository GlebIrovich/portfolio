import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const setClassName = (pos) => {
  if (pos === 1) return 'left';
  if (pos === 2) return 'middle';
  if (pos === 3) return 'right';
  return 'd-none';
};
const CardsList = ({ projectOrder, projects }) => (
  <React.Fragment>
    <ProjectCard
      text={projects['5'].text}
      title={projects['5'].title}
      className={setClassName(projectOrder[0])}
    />
    <ProjectCard
      text={projects['1'].text}
      title={projects['1'].title}
      className={setClassName(projectOrder[1])}
    />
    <ProjectCard
      text={projects['2'].text}
      title={projects['2'].title}
      className={setClassName(projectOrder[2])}
    />
    <ProjectCard
      text={projects['3'].text}
      title={projects['3'].title}
      className={setClassName(projectOrder[3])}
    />
    <ProjectCard
      text={projects['4'].text}
      title={projects['4'].title}
      className={setClassName(projectOrder[4])}
    />
  </React.Fragment>
);

export default CardsList;
