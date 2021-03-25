import React from 'react';

import {TextField,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";
import MyStepper from '../components/MyStepper';
import RadioBtn from '../components/radioBtn';


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

 function PersonalDetails() {
    const classes = useStyles();
    const history = useHistory();
    
    

     
    return (<main>
      <MyStepper activeStep="3"></MyStepper>
    <div className="headerText-container">
        <span className="headerText">Personal Details</span>
        <p className="quoteSubText">Please provide youe personal details.</p>
        
        </div>
    <div className="register-container">
    
        			
      <form className={classes.root} noValidate autoComplete="off">
        
            
        <Grid container spacing={2}>
        

            <Grid item xs={12} lg={4}  direction="column" >
            
                <TextField
                id="title"
                label="Title"
                variant="outlined"
                defaultValue="Mr"
                
                />
                
            </Grid>

            <Grid item xs={12}  lg={4} direction="column" >
            
                <TextField
                id="fullnamearb"
                label="Full name in Arabic"
                
                variant="outlined"
                defaultValue="Name in Arabic"
                />
                
            </Grid>
            <Grid item xs={12} lg={4} direction="column" >
            
            <TextField
                id="fullnameEng"
                label="Full name in English"
                
                variant="outlined"
                defaultValue="Name in English"
                />
                
            </Grid>
            

            <Grid item xs={12}  lg={4} direction="column" >
            
                <TextField
                id="nationality"
                label="Nationality"
                
                variant="outlined"
                defaultValue="Nationality"
                />
                
            </Grid>
            <Grid item xs={12} lg={4} direction="column" >
            
            <TextField
                id="countryofBirth"
                label="Country of birth"
                
                variant="outlined"
                defaultValue="Country of Birth"
                />
                
            </Grid>
            <Grid item xs={12} lg={4}  direction="column" >
            
                <TextField
                id="countryofRes"
                label="country of residence"
                variant="outlined"
                defaultValue="Country of residence"
                
                />
                
            </Grid>

            <Grid item xs={12}  lg={4} direction="column" >
            
                <TextField
                id="cityOfBirth"
                label="City Of Birth"
                
                variant="outlined"
                defaultValue="City Of Birth"
                />
                
            </Grid>
            <Grid item xs={12} lg={4} direction="column" >
            
            <TextField
                id="nationalID"
                label="National ID"
                
                variant="outlined"
                defaultValue="National ID"
                />
                
            </Grid>
            <Grid item xs={12} lg={4} direction="column" >
            
            <TextField
                id="expiry"
                label="Expiry Date"
                
                variant="outlined"
                defaultValue="Date"
                />
                
            </Grid>
            <Grid item xs={12} lg={4} direction="column" >
            
            <TextField
                id="placeofIssue"
                label="Place of Issue"
                
                variant="outlined"
                defaultValue="Aman"
                />
                
            </Grid>
           
            <Grid item xs={12}  direction="column" >
        <div class="tnc-container">
            <div id="termsCgeckbox" class="tn-chkbox-div">
            
                <label>
                    <span>To serve you better please indicate if you have any special needs such as  Visual or hearing special needs.</span>
                </label>
                </div>
            </div>
            </Grid>
            <Grid item xs={12}  direction="column" >
            
            <RadioBtn  label1="No" label2="Yes"></RadioBtn>
                
            </Grid>
            <Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/liveCheck")}> Back </Button>
            </div>
          </Grid>
            
            <Grid item xs={12} lg={2} direction="column" >
                <div >
                    <Button className="mainBtn" variant="contained" size="medium"  onClick={() => history.push("/employmentDetails")}> Next </Button>
                </div>
            </Grid>
            
        </Grid>
        
          

      </form>
      
      </div>
      
      

      </main>
    );
  }
 
export default PersonalDetails;