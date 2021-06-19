import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'black'
  },
  heading: {
    color: 'black',
    fontWeight : 'bold',
    textShadow : '-4px -2px 0 #fe2c55 , 4px 2px 0 #25F4EE',
    fontFamily : 'Montserrat , sans-serif',

  },
  [theme.breakpoints.down('sm')]:{
    mainContainer : {
      flexDirection : 'column-reverse',
  }
 
  }
  }
));