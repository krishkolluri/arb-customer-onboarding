import React from 'react';

import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
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

function EmploymentDetails() {
  const classes = useStyles();
  const history = useHistory();

  return (<main>
    <MyStepper activeStep="4"></MyStepper>
    <div className="headerText-container">
      <span className="headerText">Employment Details</span>
      <p className="quoteSubText">Please provide employment details.</p>
    </div>
    <div className="register-container">


      <form className={classes.root} noValidate autoComplete="off">


        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} direction="column" >

            <TextField
              id="title"
              label="Employment Status"
              variant="outlined"
              defaultValue="Employed"

            />

          </Grid>

          <Grid item xs={12} lg={4} direction="column" >

            <TextField
              id="title"
              label="Employer name in English"
              variant="outlined"
              defaultValue="Employer Name"

            />

          </Grid>

          <Grid item xs={12} lg={4} direction="column" >

            <TextField
              id="fullnamearb"
              label="Position Title"

              variant="outlined"
              defaultValue="CEO"
            />

          </Grid>
          <Grid item xs={12} lg={4} direction="column" >

            <TextField
              id="employedSince"
              label="Employed Since"

              variant="outlined"
              defaultValue="10/02/2018"
            />

          </Grid>


          <Grid item xs={12} lg={4} direction="column" >

            <TextField
              id="profession"
              label="Profession"

              variant="outlined"
              defaultValue="Business"
            />

          </Grid>
          <Grid item xs={12} lg={4} direction="column" >

            <TextField
              id="monthlyIncome"
              label="Monthly income"

              variant="outlined"
              defaultValue="00"
            />

          </Grid>
          <Grid item xs={12}>
            <div class="tnc-container">
              <div id="termsCgeckbox" class="tn-chkbox-div">

                <label>
                  <span>Do you intrested to transfer your monthly salary?</span>
                </label>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} direction="column" >

            <RadioBtn label1="Yes" label2="NO"></RadioBtn>

          </Grid>
          < Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/personalDetails")}> Back </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={2} >
            <div >
              <Button className="mainBtn" variant="contained" size="medium" onClick={() => history.push("/recPrograms")}> Next </Button>
            </div>
          </Grid>

        </Grid>
      </form>

    </div>
  </main>
  );
}

export default EmploymentDetails;