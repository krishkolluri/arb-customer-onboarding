import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";
import OtpInput from 'react-otp-input';
import MyStepper from '../components/MyStepper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '30ch',
    },
  },


}));

function OtpPage() {
  const classes = useStyles();
  const history = useHistory();
  const state = { otp: '' };
  const [otp, setOTP] = React.useState('');
  const handleChange = (otp) => {
    setOTP(otp);
  };

  return (<main>
    <div className="headerText-container">
      <div className="headerText">Please enter OTP</div>
      <p className="quoteSubText">please enter the one time password you recieved through SMS.</p>
    </div>
    <div className="register-container otppage">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} direction="column" >
            <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <label>
                  <span>To continue </span>
                </label>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}  >
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={4}
              separator={<span>&nbsp;&nbsp;</span>}
            />
          </Grid>
          <Grid item xs={12} direction="column" ><div><label className="otpExpire-text">OTP wiil be expire in 4:56 </label></div></Grid>
          <Grid item xs={12} direction="column" >
            <div >
              <Button className="mainBtn" variant="contained" onClick={() => history.push("/registration")}>Submit</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  </main>
  );
}

export default OtpPage;