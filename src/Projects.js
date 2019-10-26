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
          justify="space-around"
          >
          <Grid item xs={12} sm={3} className={classes.centered}>
            <i class="fas fa-book-open"></i>
            <h2>My Reads</h2>
            <div className="Tile">
              <p>
                Keep track of books you've read, are currently reading,
                or would like to read! Search through our library and find some new favorites.
              </p>
              <a class={classes.gitBtn} href="https://github.com/Gabegil214/react-reads" target="_blank"><button>View on Github<i class="fab fa-github"></i></button></a>
              <p><a href="http://unusual-trains.surge.sh/">My Reads</a></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.centered}>
            <i class="far fa-question-circle"></i>
            <h2>Would You Rather?</h2>
            <div className="Tile">
              <p>
                Would you rather have the ability to fly or have telekenesis?
                Vote and compare your answer with others!
              </p>
              <a class={classes.gitBtn} href="https://www.github.com/Gabegil214/would-you-rather-" target="_blank"><button>View on Github<i class="fab fa-github"></i></button></a>
              <p><a href="http://untidy-building.surge.sh">Would You Rather?</a></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.centered}>
            <i class="fas fa-university"></i>
            <h2>Mobile Flashcards</h2>
            <div className="Tile">
              <p>
                Got an exam coming up? Brush up and quiz yourself using customized
                decks and flashcards right on your phone!
              </p>
              <a class={classes.gitBtn} href="https://github.com/Gabegil214/flashcards" target="_blank"><button>View on Github<i class="fab fa-github"></i></button></a>
              <p>Live Demo Coming Soon</p>
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
