import React from 'react';
import Grid from '@material-ui/core/Grid';


function ProjectTile() {
  return (
    <Grid item xs={12} s={6} md={3} className="container">
      <h2>Project Tile</h2>
      <div className="Tile">
        <p>Project Tile</p>
      </div>
    </Grid>
  )
}

export default ProjectTile;
