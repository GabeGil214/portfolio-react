import React from 'react';
import SocialMedia from './SocialMedia';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './assets/styles.js'

function Home(props){
  const { value, index, ...other } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      className={classes.container}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      <Grid item className={classes.nameSpace} alignItems="center">
        <h1 className={classes.name}><span>Hi, I'm</span> Gabe Gil</h1>
        <Typography variant="p" className={classes.textRight}>React Web Developer</Typography>
      </Grid>
      <Grid container direction="row" justify="center" xs={12} sm={4} spacing={4} className={classes.space}>
        <SocialMedia />
      </Grid>
    </Grid>
  )
}

Home.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default Home;
