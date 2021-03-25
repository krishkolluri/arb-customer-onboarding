import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import MyStepper from '../components/MyStepper';
import RadioBtn from '../components/radioBtn';
import locimg from '../assets/location.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '30ch',
    },
    margin: {
      margin: theme.spacing(2),
    },

  },
}));

function AddressDetails() {
  const classes = useStyles();
  const history = useHistory();
  return (<main>
    <MyStepper activeStep="7"></MyStepper>
    
    <div className="headerText-container">
      <span className="headerText">Address Details</span>
      <p className="quoteSubText">Please provide Address details.</p>
    </div>
    <div className="register-container">
    
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
        <Grid item xs={12}>
           <span> Locate the home on maps :</span> <a href="https://www.google.com/maps/place/Jordan/@31.260374,34.8780336,7z/data=!3m1!4b1!4m5!3m4!1s0x15006f476664de99:0x8d285b0751264e99!8m2!3d30.585164!4d36.238414"><img src={locimg} className="locImg" alt="location-icon"/></a>
        </Grid>
          
          <Grid item xs={12} lg={4} sm={6} >
            <TextField
              id="title"
              label="Country"
              variant="outlined"
              defaultValue="UAE"
            />
          </Grid>

          <Grid item xs={12} lg={4} sm={6} >
            <TextField
              id="title"
              label="City / town"
              variant="outlined"
              defaultValue="Dubai"
            />
          </Grid>

          <Grid item xs={12} lg={4} sm={6}  >
            <TextField
              id="fullnamearb"
              label="District"
              variant="outlined"
              defaultValue="District"
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6} >
            <TextField
              id="employedSince"
              label="Street Name"
              variant="outlined"
              defaultValue="10/02/2018"
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6} >
            <TextField
              id="profession"
              label="Near landmark"
              variant="outlined"
              defaultValue="Business"
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6} >
            <TextField
              id="monthlyIncome"
              label="Building Number"
              variant="outlined"
              defaultValue="0-1-29"
            />
          </Grid>
          
          <Grid item xs={12} >
            <div class="tnc-container">
              <div id="termsCgeckbox" class="tn-chkbox-div">
                <label>
                  <span>Do you intrested to transfer your monthly salary?</span>
                </label>
              </div>
            </div>
          </Grid>
          
          <Grid item xs={12} >
            <RadioBtn label1="Yes" label2="NO"></RadioBtn>
          </Grid>
           <Grid item xs={12} lg={2} sm={4} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/accountServices")}> Back </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={2}  sm={4}>
            <div >
              <Button className="mainBtn" variant="contained" size="medium" onClick={() => history.push("/regulatoryDetails")}> Next </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  </main>
  );
}

export default AddressDetails;