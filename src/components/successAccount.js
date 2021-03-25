import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Alert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number';


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

function SuccessAccount() {
  const classes = useStyles();
  const [countryCode, setCountryCode] = React.useState('962');
  const history = useHistory();
  const handleChange = (countrycode) => {
    setCountryCode(countrycode);
  };

  return (<main>
    <div className="headerText-container">
      <span className="headerText"> Success!
      <p className="quoteSubText">Please check your Arab Bank account details as below</p>
      </span>
    </div>
    <div className="register-container register-pt">

      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          
          <Grid item xs={12} lg={12} sm={12}>
          <Alert variant="outlined" severity="success"> Your account number <b>[ 0118 293638 XXX ] </b>— has been created  Sucessfully And will be activated after one working day.</Alert>
          </Grid>
          <Grid item xs={12} lg={12} sm={12}>
          <label className="finalThankMsg">Looking forward to serving you. Thank you for banking with Arab Bank.</label>
          </Grid>
          <Grid item xs={12} lg={12} sm={12}>
            <div>
              <Button className="mainBtn" variant="contained" onClick={() => history.push("/login")}>Login</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  </main>
  );
}

export default SuccessAccount;