import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    fontWeight : 'bold'
  },
  title : {
    fontWeight : 'bold',
    fontSize :'2em',
    fontFamily : 'Montserrat , sans-serif',
    textShadow : '-2.5px 0 0 #fe2c55 , 2.5px 0 0 #25F4EE',

  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor : '#25f4ee',
    fontFamily : 'Montserrat , sans-serif',
    fontWeight : 'bold',
    
  },
  buttonClear: {
    backgroundColor : '#fe2c55',
    fontWeight : 'bold',
    fontFamily : 'Montserrat , sans-serif',

  }
}));