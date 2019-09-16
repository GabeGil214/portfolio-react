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
      alignItems="center"
      className={classes.container}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      <Grid item xs={12} sm={6} className={classes.space}>
        <h1 id="name"><span>I'm</span> Gabe Gil</h1>
        <p id="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, elit in tempor iaculis, velit lorem scelerisque magna, vitae mollis quam enim nec lorem. Quisque sollicitudin lobortis sapien a accumsan. Duis ut magna lectus. Sed volutpat ultrices mi a viverra. Fusce ultrices elit dignissim volutpat vehicula.</p>
      </Grid>
      <Grid container direction="row" justify="center" xs={12} sm={6} spacing={4} className={classes.space}>
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
