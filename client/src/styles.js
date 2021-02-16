import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgb(78, 2, 183)',
  },
  image: {
    marginLeft: '15px',
    paddingBottom: '40px',
    paddingTop: '40px',
  },
}));