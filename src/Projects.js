import React from 'react';
import ProjectTile from './ProjectTile';
import PropTypes from 'prop-types';
import useStyles from './assets/styles.js';
import Grid from '@material-ui/core/Grid';


function Projects(props) {
  const { value, index, ...other } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      md={8}
      xl={6}
      alignItems="center"
      className={classes.container}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      <Grid item xs={12} centered className={classes.space}>
        <h1>Projects</h1>
        <Grid
          container
          direction="row"
          justify="center"
          >
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </Grid>
      </Grid>
    </Grid>
  )
}

Projects.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export default Projects;
