import React from 'react';

import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import MyStepper from '../components/MyStepper';
import RadioBtn from '../components/radioBtn';
import PublishIcon from '@material-ui/icons/Publish';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import idfront from '../assets/id_front.png';
import idback from '../assets/id_back.png';


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

 function ScanId() {
    const classes = useStyles();
    const history = useHistory();
    
    

     
    return (<main>
      <MyStepper activeStep="1"></MyStepper>
    <div className="headerText-container">
      <span className="headerText">Scan ID</span>
        <p className="quoteSubText">You can choose National ID or Jerusalem ID to scan.</p>
    </div>
    <div className="register-container">
    
        			
      <form className={classes.root} noValidate autoComplete="off">
        
            
        <Grid container spacing={2}>
        <Grid item xs={12}  direction="column" >
        <div class="tnc-container">
            <div id="termsCgeckbox" class="tn-chkbox-div">
            
                <label>
                    <span>Please Choose ID type you want to Scan.</span>
                </label>
                </div>
            </div>
            </Grid>
            <Grid item xs={12} >
            
            <RadioBtn  label1="NaitioanlID" label2="Jerusalem ID"></RadioBtn>
                
            </Grid>

            
            <Grid item xs={12}  >
              <div className="idImgContainer">
                <img src={idfront} width="150" height="100"/>
                <img src={idback} width="150" height="100"/>
                </div>
                <div className="idImgContainer">
                <p>National ID Front</p>
                <p>National ID Back</p>
                
                </div>
            </Grid>
            <Grid item xs={12} lg={2} >
                <div >
                    <Button  endIcon={<PublishIcon />} variant="outlined" size="medium" color="primary"  >Scan</Button>
                </div>
            </Grid>
            <Grid item xs={12} lg={2}direction="column" >
                <div >
                    <Button  endIcon={<CloudUploadIcon/>} color="primary" variant="outlined" size="medium" > Upload</Button>
                </div>
            </Grid>
            
           
            <Grid item xs={12} >
                <div >
                    <Button className="mainBtn"  variant="contained" size="medium"   onClick={() => history.push("/liveCheck")}>Next</Button>
                </div>
            </Grid>

            


            
        </Grid>
        
          

      </form>
      
      </div>
      
      

      </main>
    );
  }
 
export default ScanId;