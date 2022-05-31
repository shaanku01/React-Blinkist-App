import { Grid } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from "../../atoms/Typography/Typography";
import Styles from './explore.module.css'
import MenuItem from "../../atoms/MenuItem/MenuItem";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ChatIcon from '@mui/icons-material/Chat';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import PublicIcon from '@mui/icons-material/Public';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import YardIcon from '@mui/icons-material/Yard';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {useNavigate} from 'react-router-dom';


const Menu = ()=>{
    const navigate = useNavigate();
    return (
        <div className={Styles.menu} data-testid="menu">
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                   <Grid container padding={2}>
                        <Grid item xs={4}><Typography variant={"body2"} content={"Explore by category"} styles={{cursor: "pointer"}} /></Grid>
                        <Grid item xs={4}><Typography variant={"body2"} content={"See recently added titles"} styles={{cursor: "pointer"}}/></Grid>
                        <Grid item xs={4}><Typography variant={"body2"} content={"See popular titles"} styles={{cursor: "pointer"}} /></Grid>

                    </Grid> 
                    <Grid container>
                        <Grid item xs={12}>
                            <div className={Styles.underline}></div>
                        </Grid>
                    </Grid>
                    {/* Row - 1 */}
                    <Grid container padding={1}>
                        <Grid data-testid="menuitem" item xs={4} onClick={()=>{navigate('/entrepreneurship')}}><MenuItem content={"Entrepreneurship"} emoji={NotificationsNoneIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Politics"} emoji={AccountBalanceIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Marketing & Sales"} emoji={TimelineIcon}/></Grid>

                    </Grid> 
                    {/* Row - 2 */}
                    <Grid container padding={1}>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Science"} emoji={ScienceIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Health & Nutrition"} emoji={LocalHospitalIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Personal Development"} emoji={SignalCellularAltIcon}/></Grid>

                    </Grid>  
                    {/* Row - 3 */}
                    <Grid container padding={1}>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Economics"} emoji={PublicIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"History"} emoji={TempleBuddhistIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Communication Skills"} emoji={ChatIcon}/></Grid>

                    </Grid> 
                    {/* Row - 4 */}
                    <Grid container padding={1}>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Corporate Culture"} emoji={BusinessCenterIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Motivation & Inspiration"} emoji={EmojiObjectsIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Money & Investments"} emoji={AccountBalanceWalletIcon}/></Grid>

                    </Grid> 
                    {/* Row - 5 */}
                    <Grid container padding={1}>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Psychology"} emoji={PsychologyIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Productivity"} emoji={HourglassBottomIcon}/></Grid>
                        <Grid  data-testid="menuitem" item xs={4}><MenuItem content={"Sex & Relationship"} emoji={FavoriteBorderIcon}/></Grid>

                    </Grid> 
                    {/* Row - 6 */}
                    <Grid container padding={1}>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Nature & Environment"} emoji={YardIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Career & Success"} emoji={TrackChangesIcon}/></Grid>
                        <Grid data-testid="menuitem" item xs={4}><MenuItem content={"Education"} emoji={SchoolOutlinedIcon}/></Grid>

                    </Grid> 
                    

                    


                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

        </div>

    )
}


const Explore = ()=>{

    const fun1 = ()=>{

        if(uline){
            return {borderBottom:"2px solid #2CE080"}
        }else{
            return {borderBottom:"0px solid #2CE080"}
        }
        
    }

    const [arrowPosition,setArrowPosition] = useState(true);
    const [uline,setUline] = useState(false);
    return (

        <div >
            <div className={Styles.root}  onClick={(e)=>{
            setArrowPosition((prev)=>{
                return !prev;
            })
        }}

        data-testid="explore-button"
        onMouseOver={()=>{ 
            setUline(true);
        }}
        
        onMouseOut={()=>{
            setUline(false);
        }}

       style={fun1()}
        
        >
            <div className={Styles.text}><Typography variant={"body1"} content={"Explore"} styles={{marginTop:"0px",marginBottom:'15px',cursor: "pointer"}}/></div>
            {arrowPosition?<KeyboardArrowDownIcon style={{marginTop:"5px"}}/>:<KeyboardArrowUpIcon style={{marginTop:"5px"}}/>} 

        </div>

        {!arrowPosition? <Menu /> : null}



        </div>
        
       
        
        
    )

}

export default Explore;