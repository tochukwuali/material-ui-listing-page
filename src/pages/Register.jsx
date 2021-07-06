import { useState } from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardHeader, CardActions, CardContent, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#012'
  },
  root: {
    width: 450,
    height: 300,
    borderRadius: '10px',
    padding: theme.spacing(0,2)
  },
  title: {
    fontSize: '0.9rem',
    marginLeft: theme.spacing(-1.8),
    fontWeight: 'bold',
    color: '#424242'
  },
   subText: {
    fontSize: '0.9rem',
    marginLeft: theme.spacing(-1.8),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: theme.spacing(4)
  },
  input: {
    width: '100%',
    margin: theme.spacing(1.4, 0)
  },
  btn: {
    width: '100%',
    backgroundColor: '#0e8',
    color: '#fff',
    height: '35px'
  }
}));

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className={classes.card}>
      <Card classes={{root: classes.root}}>
        <CardContent>
        <CardHeader classes={{ title: classes.title }}
        title="Enter Email and Password"
      />
       <TextField variant="outlined" label="Email" size="small" type="text" value={name} onChange={e => setName(e.target.value)} className={classes.input} />
        <TextField variant="outlined" label="Email" size="small" type="text" value={email} onChange={e => setEmail(e.target.value)} className={classes.input} />
        <TextField variant="outlined" label="Password" size="small" type="password" value={password} onChange={e => setPassword(e.target.value)} className={classes.input}/>
      </CardContent>
      <CardActions>
        <Button className={classes.btn}>Sign Up</Button>
      </CardActions>
    </Card>
    <Typography className={classes.subText}>
       Already have an account ? <Link to='/login'>Log in</Link>
    </Typography>
    </div>
  );
};

export default Register;
