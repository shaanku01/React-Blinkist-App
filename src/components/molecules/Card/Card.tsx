import React from 'react';

import Styles from '../Card/card.module.css';

import { Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '../../atoms/Typography/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useNavigate} from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
interface Props{
    id:number;
    picturenumber:string; 
    Heading:string;
    subheading:string;
    minuteread:string;
    buttonText:string;
    modifyData?: any;   
    totalreads:string;
    currentTab?:any;
}

 
const Card = (props:Props)=>{
    const navigate = useNavigate();
    const mainstyle = (props.currentTab == 'Finished')?Styles.maindiv:Styles.maindiva;
    return(
    <div id={mainstyle} data-testid="mainDiv" >
        <div id={Styles.imagediv}><img src={props.picturenumber} alt="image1" /></div>

    
            
           <div data-testid="Headnav" onClick={()=>{navigate('/detailed')}}><Typography variant={'subtitle3'} content={props.Heading} styles={{margin:"10px",cursor: "pointer"}} /></div>
            
           
            <Typography variant={'body1'} content={props.subheading} styles={{margin:"10px"}}/>
      
        
        
        
        
        
        <div id={Styles.textcenterdiv}>

           

            <Grid container >
                <Grid item xs={1}> <AccessTimeIcon/></Grid>
                <Grid item xs={5} textAlign={'left'}><Typography variant={'caption3'} content={props.minuteread} styles={{marginTop:"3px"}}/></Grid>
                <Grid item xs={1}></Grid>
                
                <Grid item xs={1} style={{display:(props.totalreads=="" )?"none":"block"}}> <PermIdentityIcon/></Grid>
                <Grid item xs={4} textAlign={'left'}><Typography variant={'caption3'} content={props.totalreads} styles={{marginTop:"3px"}}/></Grid>
 
            </Grid>
        

        

        </div>
      
        
        <Grid container>
            {/* <Grid item xs={12} >
                
                 <Button
            size="large"
            variant="text"
            color="primary"
            
            fullWidth={true}
            onClick={()=>{props.modifyData(props.id)}}
           
          >
            {props.buttonText}
          </Button> 

         /////========= {/* <button  onClick={(e)=>{console.log(props.id)}}>{props.buttonText}</button>


    
           
            </Grid> */}
            <Grid xs={12} marginBottom={1} >
                <button data-testid="final-btn" className={Styles.buttonsty} onClick={()=>{props.modifyData(props.id)}}> {props.buttonText} </button>

            </Grid>

            <Grid xs={12} textAlign={"right"}>
            <MoreHorizIcon />
            </Grid>
        </Grid>

      

       

       

    </div>

    )
}
export default Card;