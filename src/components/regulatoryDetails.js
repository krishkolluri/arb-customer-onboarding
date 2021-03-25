import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import MyStepper from '../components/MyStepper';
import RadioBtn from '../components/radioBtn';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '30ch',
      minWidth:200
    },
     formControl: {
        margin: theme.spacing(2),
        minWidth: 200,
     },
      
    

  },
}));

function RegulatoryDetails() {
  const classes = useStyles();
  const history = useHistory();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (<main>
    <MyStepper activeStep="8"></MyStepper>
    <div className="headerText-container">
      <span className="headerText">Regulatory Details</span>
      <p className="quoteSubText">Please check regulatory details.</p>
    </div>
    <div className="register-container">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
         
        
          <Grid item xs={12} lg={4} >
          <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <label>
                  <span>Are you a U.S Citizen?</span>
                </label>
              </div>
            </div>
              <RadioBtn label1="NO" label2="YES"></RadioBtn>
          </Grid>
          
          <Grid item xs={12} lg={4} >
          <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <label>
                <span>Are you a U.S Green card holder?</span>
                </label>
              </div>
            </div>
              <RadioBtn label1="NO" label2="YES"></RadioBtn>
          </Grid>

          
          <Grid item xs={12}  lg={4}>
          <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <label>
                <span>Are you resident in the U.S?</span>
                </label>
              </div>
            </div>
               <RadioBtn label1="NO" label2="YES"></RadioBtn>
          </Grid>

          
          <Grid item xs={12} lg={4}>
          <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <label>
                <span>Are you U.S taxpayer?</span>
                </label>
              </div>
            </div>
              
              <RadioBtn label1="NO" label2="YES"></RadioBtn>
          </Grid>

          <Grid item xs={12} lg={4}>
          <div className="tnc-container">
              <div id="termsCgeckbox" className="tn-chkbox-div ">
                <label>
                <span>Do you hold any other country Citizenship?</span>
                </label>
              </div>
            </div>
              
              <RadioBtn label1="NO" label2="YES"></RadioBtn>
          </Grid>
          <Grid item xs={12} lg={12}>

          <div className="tnc-container selectCitizenship">
              <div id="termsCgeckbox" className="tn-chkbox-div">
                <label>
                <span>What motivated you to open account?</span>
                </label>
              </div>
            </div>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Motivation</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Motivation"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>Online Pramotion</MenuItem>
          <MenuItem value={1}>Socile Media</MenuItem>
          <MenuItem value={2}>Marketing Agent</MenuItem>
        </Select>
      </FormControl>



          </Grid>
          <Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/addressDetails")}> Back </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={2} sm={6}>
            <div >
              <Button className="mainBtn" variant="contained" size="medium" onClick={() => history.push("/summary")}> Submit </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  </main>
  );
}

export default RegulatoryDetails;