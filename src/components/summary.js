import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
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

function Summary() {
    const classes = useStyles();
    const history = useHistory();


    return (<main>
        <div className="headerText-container">
            <span className="headerText"> Summay
      <p className="quoteSubText">Please review information you are entered and confirm.</p>
            </span>
        </div>
        <div className="register-container">

        <div className="detailsContainer">
                <Grid container spacing={2}>


                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Full Name in Arabic : </label>
                        <label className="labelValue">Test user</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Full Name in English : </label>
                        <label className="labelValue">Test user</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">National Number :</label>
                        <label className="labelValue">9761055587XXX</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Document ID : </label>
                        <label className="labelValue">CAT9XX</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Mobile Number : </label>
                        <label className="labelValue">00962-799XXX937</label>
                    </Grid>



                </Grid>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <label className="legendLabel">Personal Details</label>
                </Grid>
            </Grid>
            <div className="detailsContainer">
                <Grid container spacing={2}>


                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Date of birth : </label>
                        <label className="labelValue">17/9/1988 </label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Nationality : </label>
                        <label className="labelValue">JORDAN</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Country of residence : </label>
                        <label className="labelValue">JORDAN</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">City of birth : </label>
                        <label className="labelValue">AMMAN</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Email : </label>
                        <label className="labelValue">Test@gmail.com</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Email : </label>
                        <label className="labelValue">Test@gmail.com</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">PO BOX : </label>
                        <label className="labelValue">110453</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">zip code : </label>
                        <label className="labelValue">228372</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Maritial status : </label>
                        <label className="labelValue">Married</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Special needs : </label>
                        <label className="labelValue">No</label>
                    </Grid>


                </Grid>
            </div>


            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <label className="legendLabel">Employment Details</label>
                </Grid>
            </Grid>
            <div className="detailsContainer">
                <Grid container spacing={2}>


                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Employment status : </label>
                        <label className="labelValue">Employed</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Profession: </label>
                        <label className="labelValue">Engineer</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Gross montly income : </label>
                        <label className="labelValue">5000 JOD</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">work contact number : </label>
                        <label className="labelValue">0966-6543XXXXX</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Transfer monthly alary : </label>
                        <label className="labelValue">YES</label>
                    </Grid>



                </Grid>
            </div>

            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <label className="legendLabel">Account Details</label>
                </Grid>
            </Grid>
            <div className="detailsContainer">
                <Grid container spacing={2}>


                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Bank program : </label>
                        <label className="labelValue">Plus- E100</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Account type : </label>
                        <label className="labelValue">Current</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Additional accoun type : </label>
                        <label className="labelValue">Saving</label>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <label className="labelkey">Visa Electron issuance : </label>
                        <label className="labelValue">Receive from branch</label>
                    </Grid>
                   
                </Grid>
            </div>



            < Grid container spacing={2}>
                <Grid item xs={12} >
                    <label className="legendLabel">Address Details</label>
                </Grid>
            </Grid>
            <div className="detailsContainer">
                <Grid container spacing={2}>

                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Country of residence : </label>
                        <label className="labelValue">JORDAN</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">City/Town : </label>
                        <label className="labelValue">AMMAN</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">District : </label>
                        <label className="labelValue">SHMEISANI</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Street Name : </label>
                        <label className="labelValue">Shakeer Ben Zayd</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Nearest landmark : </label>
                        <label className="labelValue">Aster Clinic</label>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <label className="labelkey">Building number : </label>
                        <label className="labelValue">501</label>
                    </Grid>



                </Grid>
            </div>

            < Grid container spacing={2}>
            <Grid item xs={12} lg={2} sm={6} >
            <div >
              <Button className="mainBtn backBtn" variant="contained" size="medium" onClick={() => history.push("/regulatoryDetails")}> Back </Button>
            </div>
          </Grid>
                <Grid item xs={12} lg={2} sm={6}>
                    <div >
                        <Button className="mainBtn" variant="contained" size="medium" onClick={() => history.push("/successAccount")}> Confirm </Button>
                    </div>
                </Grid>
            </ Grid>

        </div>

    </main>
    );
}

export default Summary;