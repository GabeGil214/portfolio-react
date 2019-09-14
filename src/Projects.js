import React from 'react';
import ProjectTile from './ProjectTile';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Projects(props) {
  const { value, index, ...other } = props;

  return (
    <Typography
      className="hero"
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      <h1>Projects</h1>
      <div className="projects-row">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </Typography>
  )
}

Projects.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export default Projects;
