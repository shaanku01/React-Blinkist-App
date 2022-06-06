import CustomButton from "../../atoms/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from "@mui/material";

import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import IconButton from "@material-ui/core/IconButton";

import {useNavigate} from 'react-router-dom';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(0),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#22C870',
        boxShadow: '0 0 0 0.2rem #22C870',
      },
    },
  }));
  const CustomizedSelects= ()=> {
  
  
    return (
      <div>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
          <BootstrapInput placeholder="email" id="demo-customized-textbox" />
  
          
        </FormControl>
        
        <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
          <NativeSelect
            id="demo-customized-select-native" 
            
            input={<BootstrapInput />}
          >
            
            <option  >@Kindle.com</option>
            <option >@gmail.com</option>
            <option >@hotmail.com</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }



  
  

const KindleButton = ()=>{

    const navigate = useNavigate();

    //First Dialogue
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };




      // Success Dialogue
      const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };




    return(

        <div style={{display:"inline-block"}}>
             <CustomButton            
              variant="text"
              endIcon={<AiOutlineArrowRight />}
              sx={{
                color: "black",
                border: "none",
                width: "170px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#22C870",
                },
              }}

              onClick={handleClickOpen}              
            >
              send to kindle
        </CustomButton>


        <Dialog open={open} onClose={handleClose}>
        
              <CloseIcon onClick={handleClose} style={{marginTop:"5px",marginLeft:"5px",cursor:"pointer"}} color="disabled"/>
     
        <DialogTitle>Set up your Kindle</DialogTitle>
        <DialogContent>

            <Grid container>
            <Grid item xs={12}><DialogContentText><h5>Send blinks right to your kindle from with in the app</h5> </DialogContentText></Grid>
            <Grid item xs={12}><h5><b>1. Add Blinkist to your approved document senders</b></h5></Grid>
            <Grid item xs={12}><h5>2. Add your Kindle Email </h5></Grid>

            </Grid>
          
            <CustomizedSelects/>
            <Grid container>
                <Grid item xs={12}> 
                <CustomButton            
              variant="text"          
              sx={{
                color: "black",
                border: "none",
                width: "74%",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                backgroundColor:"#22C870",
                "&:hover": {
                    color: "black",
                    backgroundColor: "#22C870",
                  },

              }}

              onClick={()=>{handleClickOpen();handleClose();handleClickOpen1(); }}              
            >
              Add Email
        </CustomButton>

                </Grid>

                <Grid item xs={8} style={{textAlign:"center"}}>
                    <h5 style={{color:"#22C870",marginLeft:"60px",cursor:"pointer"}}>Need Help?</h5>
                </Grid>

            </Grid>

        </DialogContent>
        
      </Dialog>



      {/*Success Dialogue */}

      <Dialog open={open1} onClose={handleClose1}>
        
        <CloseIcon onClick={handleClose1} style={{marginTop:"5px",marginLeft:"5px",cursor:"pointer"}} color="disabled"/>     
        <DialogTitle>

            <Grid item style={{textAlign:"center"}}><CheckCircleOutlineSharpIcon  sx={{ color: "#22C870" ,height:"100px",width:"100px",marginLeft:"auto" }}/></Grid>
        
        </DialogTitle>
        <DialogContent>
            <Grid container>
                <Grid item>
                    <h1><span style={{color:"#0365f2"}}>The Grid</span> was successfully sent to your kindle</h1>
                </Grid> 

                <Grid item>
                    <h4>Next time you sinc your kindle the blinks will be waiting for you - please be patient they can be slow travellers </h4>
                </Grid> 

                <Grid item xs={12} style={{textAlign:"center"}}>
                <CustomButton            
              variant="text"          
              sx={{
                  dislplay:"block",
                color: "black",
                border: "none",
                width: "300px",
                height: "44px",
                margin: "5px",
                marginLeft:"auto",
                borderRadius: "5px",
                fontSize: "14px",
                backgroundColor:"#22C870",
                "&:hover": {
                    color: "black",
                    backgroundColor: "#22C870",
                  },

              }}

              onClick={()=>{handleClose1(); navigate("/") }}              
            >
              Continue Reading
        </CustomButton>
                </Grid>


            </Grid>
            <DialogContentText></DialogContentText>
            
    
        </DialogContent>
        
      </Dialog>
    

        </div>
       
    )
}

export default KindleButton;