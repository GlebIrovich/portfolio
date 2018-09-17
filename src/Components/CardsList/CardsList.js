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
    <ProjectCard project={projects['4']} className={setClassName(projectOrder[0])} />
    <ProjectCard project={projects['1']} className={setClassName(projectOrder[1])} />
    <ProjectCard project={projects['2']} className={setClassName(projectOrder[2])} />
    <ProjectCard project={projects['3']} className={setClassName(projectOrder[3])} />
    {/* <ProjectCard project={projects['4']} className={setClassName(projectOrder[4])} /> */}
  </React.Fragment>
);

export default CardsList;
