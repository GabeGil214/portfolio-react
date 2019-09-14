import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function About(props){
  const { value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, elit in tempor iaculis, velit
        lorem scelerisque magna, vitae mollis quam enim nec lorem. Quisque sollicitudin lobortis sapien a accumsan. Duis ut magna lectus.
        Sed volutpat ultrices mi a viverra. Fusce ultrices elit dignissim volutpat vehicula.</p>
    </Typography>
  )
}

About.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default About;
