import React from 'react';
import ReactDOM from "react-dom";
/*import { SampleApp } from "./sample-app/react-js-sample";*/
import { useHistory } from "react-router";
import {Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MyStepper from '../components/MyStepper';
//import selfyImg from '../assets/selfyImg.png';
import SelfyImg from '../assets/liveNess.png';





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

 function IdVerfication() {
    const classes = useStyles();
    const history = useHistory();
   /* const onLivenessCheckPressed=()=> {
      SampleApp.onLivenessCheckPressed();
    }*/
    

     
    return (<main>
      <MyStepper activeStep="2"></MyStepper>
    <div className="headerText-container">
      <span className="headerText">Identity Verfication</span>
      <p className="quoteSubText">Liveness check is to verify your Identity by selfie video.</p>
    </div>
    <div className="register-container">
    
        			
      <form className={classes.root} noValidate autoComplete="off">
        
            
        <Grid container spacing={2}>
        
            <Grid item xs={12} >
            <a href="http://localhost:8000/sample-apps/sample-app-js/">  <img src={SelfyImg} width="400" height="300" calssName="selfyImg"/></a>
            </Grid>
            <Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/scanId")}> Back </Button>
            </div>
          </Grid>
            <Grid item xs={12} lg={2} sm={6}>
                <div >
                    <Button className="mainBtn" variant="contained" size="medium"   onClick={() => history.push("/personalDetails")}>Next</Button>
                </div>
            </Grid>

            
            
        </Grid>
        
          

      </form>
      
      </div>
      
      

      </main>
    );
  }
 
export default IdVerfication;