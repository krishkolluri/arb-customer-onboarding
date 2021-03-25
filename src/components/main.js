import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number';
import CheckBox from './checkBox';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '30ch',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(1),

  }

}));

function Main() {
  const classes = useStyles();
  const [countryCode, setCountryCode] = React.useState('962');
  const history = useHistory();
  const handleChange = (countrycode) => {
    setCountryCode(countrycode);
  };

  return (<main>
    <div className="headerText-container">
      <span className="headerText"> Sign up for your account today!
      <p className="quoteSubText">Banking now on your finger tips!</p>
      </span>
    </div>
    <div className="register-container register-pt">
    
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5} sm={12}>
            <MuiPhoneNumber defaultCountry={'jo'} label="Mobile Number" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item xs={12} lg={5} sm={12}>
            <TextField
              id="emailId"
              label="E-mail Address"
              variant="outlined"
              defaultValue="test@gmail.com"
              placeholder="test@gmail.com"
            />
          </Grid>
          <Grid item xs={12} lg={12} sm={12}>
            <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <input type="checkbox" id="checkTNC" name="TNC" value="1" />
                <label>
                  <span>I have read the Terms & Conditions and I hereby confirm that I am the beneficial owner this account. </span>
                  <a target="_blank" href="#" className="tnc-text" >Terms & Conditions </a>
                </label>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={12} sm={12}>
            <div>
              <Button className="mainBtn" variant="contained" onClick={() => history.push("/OtpPage")}>Confirm</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  </main>
  );
}

export default Main;