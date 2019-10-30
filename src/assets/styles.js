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
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '1200px'
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
    fontWeight: '300',
    lineHeight: '1',
    margin: '10px 0',
    '& > span': {
      fontSize: '1rem',
      display: 'block',
    },
  },
  nameSpace: {
    padding: '0 15px',
    maxWidth: '415px',
  },
  textRight: {
    position: 'relative',
    left: '150px',
  },
  icon: {
    margin: '5px',
    fontSize: '1.5rem',
    '& > a': {
      color: 'white'
    },
  },
  tile: {
    margin: '5px 0',
    padding: '10px 0',
  },
  projectTile: {
    textAlign: 'center',
    maxWidth: '315px',
    margin: '30px auto',
  },
  projectIcon: {
    fontSize: '2rem',
  },
  title: {
    marginBottom: '3rem'
  }
}))


export default useStyles
