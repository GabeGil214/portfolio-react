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
        <a href="https://www.instagram.com/gabegil214"><Icon class="fab fa-instagram"></Icon></a>
      </div>
      <div className={classes.icon}>
        <a href="https://www.github.com/gabegil214"><Icon class="fab fa-github"></Icon></a>
      </div>
      <div className={classes.icon}>
        <a href="https://www.linkedin.com/gabegil214"><Icon class="fab fa-linkedin"></Icon></a>
      </div>
    </React.Fragment>
  )
}

export default SocialMedia;
