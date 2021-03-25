import React from 'react';

import {TextField,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import MyStepper from '../components/MyStepper';
import { useHistory } from "react-router";




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
          width: '30ch',
    },
  },
  
  
}));

 function Login() {
    const classes = useStyles();
    const history = useHistory();
    
    const [isSuccess, setSuccess] = React.useState(false);    

    const handleClick = (event) => {
        setSuccess(true);
      };
     
    return (<main>
     
    <div className="headerText-container">
      <span className="headerText">Login</span>
      <p className="quoteSubText">Please login to complete your online subscription to activate account.</p>
    </div>
    <div className="register-container">
            			
      <form className={classes.root} noValidate autoComplete="off">
                   
        <Grid container spacing={2}>
        <Grid item xs={12}  direction="column" >
        <div class="tnc-container">
            <div id="termsCgeckbox" class="tn-chkbox-div">
            
                <label>
                    <span>  </span>
                </label>
                </div>
            </div>
            </Grid>
            <Grid item xs={12} lg={4}  direction="column" >
            
                <TextField
                id="username"
                label="User Name"
                variant="outlined"
                defaultValue="Username"
                
                />
                
            </Grid>

            <Grid item xs={12}  lg={4} direction="column" >
            
                <TextField
                id="Password"
                label="Password"
                type="password"
                variant="outlined"
                defaultValue="*******"
                />
                
            </Grid>
            
            <Grid item xs={12} ><div className="forgotpwdTxt"><a href="#">Forgot password</a></div></Grid>
            

            <Grid item xs={12} lg={6} >
                <div >
                    <Button className="mainBtn" variant="contained" onClick={() => history.push("/scanId")}> Submit</Button>
                </div>
            </Grid>
            
        </Grid>
        
          <Grid item xs={12} lg={12}>
              
                
            
          </Grid>

      </form>
      
      </div>
      
      

      </main>
    );
  }
 
export default Login;