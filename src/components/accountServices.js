import React from 'react';

import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";
import MyStepper from '../components/MyStepper';
import RadioBtn from '../components/radioBtn';
import CheckBox from './checkBox';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
         width: '30ch',
    },
    margin: {
      margin: theme.spacing(1),
    },
  
  },
  
  
}));

 function AccountServices() {
    const classes = useStyles();
    const history = useHistory();
    

     
    return (<main>
      <MyStepper activeStep="6"></MyStepper>
    <div className="headerText-container">
        <span className="headerText">Account Services 
        <p className="quoteSubText">Hello user! based on information you provided , we recommended the following banking programs:</p></span></div>
    <div className="register-container">
    
        			
      <form className={classes.root} noValidate autoComplete="off">
        
            
        <Grid container spacing={2}>
        <Grid item xs={12}  direction="column" >
        <div class="tnc-container">
            <div id="termsCgeckbox" class="tn-chkbox-div">
            
                <label>
                    <span>Please select an account type.</span>
                </label>
                </div>
            </div>
            </Grid>
            <Grid item xs={12}  direction="column" >
            
            <CheckBox label1="Current Account" label2="Saving - special"></CheckBox>
                
            </Grid>
            <Grid item xs={12}  direction="column" >
              <div class="tnc-container">
                  <div id="termsCgeckbox" class="tn-chkbox-div">
                  
                      <label>
                          <span>Please choose Visa issuance method of delivery.</span>
                      </label>
                      </div>
                  </div>
            </Grid>
            <Grid item xs={12}  direction="column" >
            
            <RadioBtn label1="Receive from branch" label2="Deliver through courier" label3="Virtual Card"></RadioBtn>
                
            </Grid>
           
           < Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/recPrograms")}> Back </Button>
            </div>
          </Grid>

            <Grid item xs={12} lg={2} direction="column" >
                <div >
                    <Button className="mainBtn" variant="contained" size="medium"  onClick={() => history.push("/addressDetails")}>Next</Button>
                </div>
            </Grid>
            
            
        </Grid>
        
          

      </form>
      
      </div>
      
      

      </main>
    );
  }
 
export default AccountServices;