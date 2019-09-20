import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './assets/styles.js'


function ProjectTile() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3} className={classes.centered}>
      <h2>Project Tile</h2>
      <div className="Tile">
        <p>Project Tile</p>
      </div>
    </Grid>
  )
}

export default ProjectTile;
