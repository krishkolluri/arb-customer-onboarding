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

 function Registration() {
    const classes = useStyles();
    const history = useHistory();
    
    const [isSuccess, setSuccess] = React.useState(false);    

    const handleClick = (event) => {
        setSuccess(true);
      };
     
    return (<main>
     
    <div className="headerText-container">
      <span className="headerText">Registration</span>
      <p className="quoteSubText">Please create your online credentials to activate your Arab bank Mobile subscription.</p>
    </div>
    <div className="register-container">
    {isSuccess ? <Alert variant="outlined" severity="success"> Success — Registration completed Sucessfully! <a href="/login">Login</a></Alert> : null}
        			
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
            <Grid item xs={12} lg={4} direction="column" >
            
                <TextField
                id="Cnfpwd"
                label="Confirm password"
                variant="outlined"
                type="password"
                defaultValue="*******"              
                />
                
            </Grid>
            <Grid item xs={12}  direction="column" >
              <div>
              <label className="otpExpire-text">Password Policy :</label>
              </div>
              <p className="quoteSubText">- Password must be at least minimum 8 characters long with a maximum of 15 characters.</p>
              <p className="quoteSubText">- Password must have at least one number and one special character. <span className="forgotpwdTxt"><a href="#" >More...</a></span></p>
              </Grid>
            

            <Grid item xs={12} lg={6} direction="column" >
                <div >
                    <Button className="mainBtn" variant="contained" onClick={handleClick}> Register</Button>
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
 
export default Registration;