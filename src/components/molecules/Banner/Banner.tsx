import { Grid, makeStyles } from "@mui/material";
import { grid } from "@mui/system";
import React from "react";
import Styles from "./Banner.module.css";
import Typographys from "../../atoms/Typography/Typography";




// const Banner = ()=>{

//     return (
      
//             <Grid container >
                
//                 <Grid item xs={5}>
//                 <div>
//                     <div className={Styles.box1}>
//                     <Typographys content={'Explore Books on'} variant={"h1"}  />
//                     <Typographys content={'entrepreneurship'} variant={"h1"}  />
//                     </div>
//                     <div className={Styles.box2}>
//                     <Typographys content={'Everything you need to know about thriving on a '} variant={'subtitle1'} />
//                     <Typographys content={'shoestring budget, making your first million, and hiring '} variant={'subtitle1'} />
//                     <Typographys content={'right from the start.'} variant={'subtitle1'} />
//                     </div>
                

//                 </div>

//             </Grid>
//             <Grid item xs={3}>
//                 <img src="pictures/banner.png" alt="banner-img" />
//             </Grid>

               

          
          
//         </Grid>

      
        
       
//     )
// }

// 
const Banner= ()=> {
    
    return (
      <div className={Styles.parent}>
        <div className={Styles.header}>
          <Typographys variant="h1" content="Explore Books on entrepreneurship" />
        </div>
        <div className={Styles.body}>
          <Typographys
            variant="subtitle3"
            content="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
          />
        </div>
        <div className={Styles.img}>
            <img src='pictures/banner.png' alt="banner"/>
        </div>
      </div>
    );
  }
  export default Banner;