import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  text: {
    fontFamily : 'Montserrat , sans-serif',
    fontWeight : '400',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',

    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',

  },
  title: {
    padding: '0 16px',
    fontFamily : 'Montserrat , sans-serif',
    fontWeight : '100',
    fontSize : '1.5em',
    textShadow : '-2px 0 0 #fe2c55 , 2px 0 0 #25F4EE',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content : {
    fontFamily : 'Montserrat , sans-serif',
    fontSize : '0.85em',
    fontWeight : '100'
  },
});