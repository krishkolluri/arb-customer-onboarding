import React from 'react';

import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";
import MyStepper from './MyStepper';
import RadioBtn from './radioBtn';
import CheckBox from './checkBox';
import prg1 from '../assets/prog1.png';
import prg2 from '../assets/prg2.png';


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

 function RecommendedPrograms() {
    const classes = useStyles();
    const history = useHistory();
    

     
     return (<main>
      <MyStepper activeStep="5"></MyStepper>
    <div className="headerText-container">
        <span className="headerText">Recommended Banking Programs !
        <p className="quoteSubText">Hello <span className="customerName">Mr.Sheik Abdul  </span> based on information you provided , we recommended the following banking programs.</p></span></div>
    <div className="register-container">
    
        			
      <form className={classes.root} noValidate autoComplete="off">
        
            
        <Grid container spacing={2}>
        <Grid item xs={12}  direction="column" >
        <div class="tnc-container">
            <div id="termsCgeckbox" class="tn-chkbox-div">
            
                <label>
                    <span>Please select a program you want to be a member.</span>
                </label>
                </div>
            </div>
            </Grid>
            <Grid item xs={12}  direction="col" >
            
            <RadioBtn label1={<img
                src={prg1}
                className='img-fluid'
                alt='tst'
              />}
            label2={<img
              src={prg2}
              className='img-fluid'
              alt='tst'
            />} direction="column"></RadioBtn>
                
            </Grid>
            
           
           < Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/employmentDetails")}> Back </Button>
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
 
export default RecommendedPrograms;