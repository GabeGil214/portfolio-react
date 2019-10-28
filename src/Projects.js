import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import useStyles from './assets/styles.js';
import Grid from '@material-ui/core/Grid';


function Projects(props) {
  const { value, index, ...other } = props;
  const classes = useStyles();

  const ProjectBtn = withStyles({
    root: {
      color: '#333',
      backgroundColor: 'white',
      margin: '10px auto',
      display: 'block',
      width: 'fit-content',
    },
    '&:hover': {
      backgroundColor: '#ddd',
    }
  })(Button)

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
          justify="space-around"
          >
          <Grid item xs={12} sm={3} className={classes.centered}>
            <i class="fas fa-book-open"></i>
            <h2>My Reads</h2>
            <div className={classes.tile}>
              <p>
                Keep track of books you've read, are currently reading,
                or would like to read! Search through our library and find some new favorites.
              </p>
              <ProjectBtn size="small" variant="contained" href="https://github.com/Gabegil214/react-reads" target="_blank">View on Github<i class="fab fa-github"></i></ProjectBtn>
              <ProjectBtn size="small" variant="contained" href="http://unusual-trains.surge.sh/">Live Demo</ProjectBtn>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.centered}>
            <i class="far fa-question-circle"></i>
            <h2>Would You Rather?</h2>
            <div className={classes.tile}>
              <p>
                Would you rather have the ability to fly or have telekenesis?
                Vote and compare your answer with others!
              </p>
              <ProjectBtn size="small" variant="contained" href="https://www.github.com/Gabegil214/would-you-rather-"  target="_blank">View on Github<i class="fab fa-github"></i></ProjectBtn>
              <ProjectBtn size="small" variant="contained" href="http://untidy-building.surge.sh">Live Demo</ProjectBtn>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.centered}>
            <i class="fas fa-university"></i>
            <h2>Mobile Flashcards</h2>
            <div className={classes.tile}>
              <p>
                Got an exam coming up? Brush up and quiz yourself using customized
                decks and flashcards right on your phone!
              </p>
              <ProjectBtn size="small" variant="contained" href="https://github.com/Gabegil214/flashcards" target="_blank">View on Github<i class="fab fa-github"></i></ProjectBtn>
              <ProjectBtn size="small" variant="contained">Live Demo Coming Soon</ProjectBtn>
            </div>
          </Grid>
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
