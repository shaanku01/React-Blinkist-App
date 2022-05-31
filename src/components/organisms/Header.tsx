import React from "react";




import Typography from "../atoms/Typography/Typography";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Styles from "./Header.module.css";
import { Grid } from "@mui/material";
import Explore from "./Explore/Explore";

import {useAuth0} from '@auth0/auth0-react';
import CustomAvatar from "../atoms/Avator/Avator";
import Typography2 from "@mui/material/Typography";


const Header = () => {

  // const {loginWithRedirect , logout , user , isAuthenticated} = useAuth0();

  // const Login = ()=>{
  //   loginWithRedirect();
  //   console.log(user);
  // }

  // const Logout = ()=>{
  //   logout();
  // }

  return (
    <div id={Styles.maindiv}>
      <Grid container data-testid="main-header">
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <img data-testid="blinkist-logo" src="logo.png" alt="icon" className={Styles.image} />
        </Grid>
        <Grid item xs={1}>
          <SearchIcon data-testid="searchIcon-button" className={Styles.icon} />
        </Grid>
        <Grid item xs={1}  >
        <Explore />
        </Grid>
        <Grid item xs={4}  >
          <div className={Styles.lib}><Typography variant={"body1"} content={"My Library"} styles={{marginTop:"7px" , cursor: "pointer"}} /></div>
            
        </Grid>
      

        <Grid item xs={1} >
           <div className={Styles.root} data-testid="account-dropdown-button">
          <div className={Styles.text} ><Typography variant={"body1"} content={"Account"} styles={{marginTop:"0px",marginBottom:'15px',cursor: "pointer"}}/></div>
          <KeyboardArrowDownIcon />
          </div> 

          {/* UNCOMMENT FOR AUTHENTICATION */}

            {/*
          isAuthenticated?(<div onClick={()=>{isAuthenticated?Logout():Login()}}>
            <Typography2 variant="body1" id={Styles.inblock}><CustomAvatar/></Typography2>
            <KeyboardArrowDownIcon />
            </div>):(<div className={Styles.root}>
          <div className={Styles.text} onClick={()=>{isAuthenticated?Logout():Login()}}><Typography variant={"body1"} content={"Account"} styles={{marginTop:"0px",marginBottom:'15px',cursor: "pointer"}}/></div>
          <KeyboardArrowDownIcon /></div>)
            */ }
        
        </Grid>
        <Grid item xs={1}> </Grid>
      </Grid>
    </div>
  );
};

export default Header;
