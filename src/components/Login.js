import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@material-ui/core/styles';

const Login = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    text_field: {
      border: 0,
      borderRadius: 15,
      padding: '5px 30px',
      marginBottom: '10px',
    },
    btn: {
      padding: '0 30px',
      borderRadius: 15,
    },
  }); 

  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div className={classes.text_field}>
        <TextField
            required
            type="text"
            id="outlined-required"
            label="Enter Username"
        />
        </div>
        <div className={classes.text_field}>
          <TextField
            required
            type="password"
            id="outlined-required"
            label="Enter Password"
        />
        </div>

        <div className={classes.btn}>
          <Button variant="contained" type="submit">login</Button>
        </div>
      </form>
    </div>
  )
}

export default Login;
