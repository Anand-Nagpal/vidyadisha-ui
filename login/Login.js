import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Login(props) {
  const classes = useStyles();

  let{
    username,
    password
  } = props.loginDetails;

  return (
    <form className={classes.root} noValidate autoComplete="off" onChange={props.handleChange}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField  name="username" label="User-Name" variant="outlined" value={username}/>
        </Grid>
        <Grid item xs={12}>
          <TextField  name="password" label="Password" type="password" variant="outlined" value={password} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={props.login}>
          Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}