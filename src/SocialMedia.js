import React from 'react';
import Icon from '@material-ui/core/Icon'
import useStyles from './assets/styles.js'
import { loadCSS } from 'fg-loadcss'

function SocialMedia() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <React.Fragment>
      <div className={classes.icon}>
        <Icon class="fab fa-instagram"></Icon>
      </div>
      <div className={classes.icon}>
        <Icon class="fab fa-github"></Icon>
      </div>
      <div className={classes.icon}>
        <Icon class="fab fa-linkedin"></Icon>
      </div>
    </React.Fragment>
  )
}

export default SocialMedia;
