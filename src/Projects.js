import React from 'react';
import ProjectTile from './ProjectTile';

function Projects() {
  return (
    <div className="container-full">
      <h1>Projects</h1>
      <div className="projects-row">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  )
}

export default Projects;
