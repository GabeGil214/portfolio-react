import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000',
    color: '#FFF',
    height: '100vh',
  },
  container: {
    flexGrow: 1,
    height: '90vh',
    margin: '0 auto',
    overflowX: 'hidden',
  },
  viewContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  space: {
    padding: '0 15px',
  },
  centered: {
    textAlign: 'center',
  },
  transparent: {
    background: 'transparent',
    backgroundColor: 'transparent',
  },
  appBar: {
    backgroundColor: '#000',
    position: 'static',
  },
  name: {
    fontSize: '5rem',
    '& > span': {
      fontSize: '1rem',
      display: 'block',
    },
  },
  textRight: {
    position: 'relative',
    left: '202px',
  },
  icon: {
    margin: '5px',
    fontSize: '1.5rem',
    '& > a': {
      color: 'white'
    },
  },
  tile: {
    margin: '15px 0',
    padding: '10px 0',
  }
}))


export default useStyles
