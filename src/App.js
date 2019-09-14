import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import './App.css';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000',
    color: '#FFF',
    height: '100vh'
  },
  transparent: {
    background: 'transparent'
  }
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 50,
      width: '100%',
      backgroundColor: '#FFF',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

export default function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
   setValue(index);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classes.transparent}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
            >
            <StyledTab label="Home" {...a11yProps(0)} />
            <StyledTab label="About" {...a11yProps(1)} />
            <StyledTab label="Projects" {...a11yProps(2)} />
          </StyledTabs>
        </AppBar>
        <Container maxWidth='md'>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
            <Home value={value} index={0} />
            <About value={value} index={1} />
            <Projects value ={value} index={2} />
          </SwipeableViews>
        </Container>
      </div>
    </React.Fragment>
  );
}
