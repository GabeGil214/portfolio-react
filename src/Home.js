import React from 'react';
import SocialMedia from './SocialMedia';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Home(props){
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
      <div className="container-left">
        <h1 id="name"><span>I'm</span> Gabe Gil</h1>
        <p id="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, elit in tempor iaculis, velit lorem scelerisque magna, vitae mollis quam enim nec lorem. Quisque sollicitudin lobortis sapien a accumsan. Duis ut magna lectus. Sed volutpat ultrices mi a viverra. Fusce ultrices elit dignissim volutpat vehicula.</p>
      </div>
      <div className="container-right">
        <SocialMedia />
      </div>
    </Typography>
  )
}

Home.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default Home;
