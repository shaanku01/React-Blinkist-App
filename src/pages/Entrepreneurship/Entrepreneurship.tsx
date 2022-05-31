import React, { MouseEventHandler, useState } from "react";

import Footer from "../../components/molecules/footer/Footer";
import Banner from "../../components/molecules/Banner/Banner";
import { Grid, Input } from "@mui/material";

import CustomSearch from "../../components/molecules/CustomSearch/CustomSearch";
import Styles from "./Entrepreneurship.module.css";
import Typography from "../../components/atoms/Typography/Typography";
import data from "../input.json";

import Card2 from '../../components/molecules/Card2/Card2'
import Header from "../../components/organisms/Header";
const Entrepreneurship = () => {


  const [search,setSearch] = useState("");

  const modifyData= (id:number)=>{
    
    
  }

  const searchRender = ()=>{

    return(
      <div>
        <Grid item  xs={12} marginLeft={10}>
        <Grid container>
        <Grid item xs={1.1}></Grid>
        <Grid item xs={8}>
        {data
          .filter((item) => {
            return (item.Heading.toLowerCase().includes(search.toLowerCase()))||(item.subheading.toLowerCase().includes(search.toLowerCase()));
          })
          .map((items) => {
            return (
                <div style={{margin:"20px",display:"inline-block"}}>
                   <Card2
             id={items.id}
             picturenumber={items.picturenumber}
             Heading={items.Heading}
             subheading={items.subheading}
             minuteread={items.minuteread} buttonText={"+ Add to Library"}        modifyData = {modifyData}    
             totalreads={items.totalreads} readStatus={items.readstatus}     />

                </div>
                   

              
              
            );
          })}

        </Grid>
        <Grid item xs={2}></Grid>

        </Grid>
        </Grid>
      </div>
    )
  }

  const basicRender = ()=>{

    return(

     <div>
        <Grid item xs={12} marginLeft={32} marginTop={5} marginBottom={0}>
      <Typography variant={"h3"} content={"Trending blinks"}></Typography>
    </Grid>

    <Grid item xs={12} marginLeft={10}>
      <Grid container>
        <Grid item xs={1.1}></Grid>
        <Grid item xs={8}>
        {data
          .filter((item) => {
            return item.rtype == "Trending";
          })
          .map((items) => {
            return (
                <div style={{margin:"20px",display:"inline-block"}}>
                   <Card2
             id={items.id}
             picturenumber={items.picturenumber}
             Heading={items.Heading}
             subheading={items.subheading}
             minuteread={items.minuteread} buttonText={"+ Add to Library"}        modifyData = {modifyData}
             totalreads={items.totalreads}   readStatus={items.readstatus}       />

                </div>
                   

              
              
            );
          })}

        </Grid>
        <Grid item xs={2}></Grid>

        {/* {data
          .filter((item) => {
            return item.rtype == "Trending";
          })
          .map((items) => {
            return (
                <Grid item xs={4}>
                    <Card
             
                  picturenumber={items.picturenumber}
                  Heading={items.Heading}
                  subheading={items.subheading}
                  minuteread={items.minuteread} buttonText={"Add to Library"}                  />

                </Grid>
              
            );
          })} */}
      </Grid>
    </Grid>

    <Grid item xs={12} marginLeft={32} marginTop={5} marginBottom={0}>
      <Typography variant={"h3"} content={"Just added"}></Typography>
    </Grid>

    <Grid item xs={12} marginLeft={10}>
      <Grid container>
      <Grid item xs={1.1}></Grid>
        <Grid item xs={8}>
        {data
          .filter((item) => {
            return item.rtype == "justadded";
          })
          .map((items) => {
            return (
                <div style={{margin:"20px",display:"inline-block"}}>
                   <Card2
             id={items.id}
             picturenumber={items.picturenumber}
             Heading={items.Heading}
             subheading={items.subheading}
             minuteread={items.minuteread} buttonText={"+ Add to Library"}  readStatus={items.readstatus}    modifyData = {modifyData}    totalreads={items.totalreads}        />

                </div>
                   

              
              
            );
          })}

        </Grid>
        <Grid item xs={2}></Grid>

        {/* {data
          .filter((item) => {
            return item.rtype == "justadded";
          })
          .map((items) => {
            return (
                <Grid item xs={4}>
                    <Card
                
                  picturenumber={items.picturenumber}
                  Heading={items.Heading}
                  subheading={items.subheading}
                  minuteread={items.minuteread} buttonText={"Add to Library"}                  />

                </Grid>
              
            );
          })} */}
      </Grid>
    </Grid>

    <Grid item xs={12} marginLeft={32} marginTop={5} marginBottom={0}>
      <Typography
        variant={"h3"}
        content={"Featured audio blinks"}
      ></Typography>
    </Grid>

    <Grid item xs={12} marginLeft={10} marginBottom={20}>
      <Grid container>

      <Grid item xs={1.1}></Grid>
        <Grid item xs={8}>
        {data
          .filter((item) => {
            return item.audio;
          })
          .map((items) => {
            return (
                <div style={{margin:"20px",display:"inline-block"}}>
                   <Card2
             id={items.id}
             picturenumber={items.picturenumber}
             Heading={items.Heading}
             subheading={items.subheading}
             minuteread={items.minuteread} buttonText={"+ Add to Library"}    readStatus={items.readstatus}    modifyData = {modifyData}     totalreads={items.totalreads}    />

                </div>
                   

              
              
            );
          })}

        </Grid>
        <Grid item xs={2}></Grid>

        {/* {data
          .filter((item) => {
            return item.audio;
          })
          .map((items) => {
            return (
                <Grid item xs={4}>
                    <Card
                 
                  picturenumber={items.picturenumber}
                  Heading={items.Heading}
                  subheading={items.subheading}
                  minuteread={items.minuteread} buttonText={"Add to Library"}                  />

                </Grid>
              
            );
          })} */}
      </Grid>
    </Grid>
     </div>

    );
  }



  return (
    <div data-testid="explore-page">
      <Header />
      <Grid container> 
        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          marginLeft={30}
          marginBottom={5}
        >
          <Banner />
        </Grid>
        <Grid item xs={12} marginLeft={10}>
          <div className={Styles.input}>
            <Input
            data-testid="searchInput"
              startAdornment={<CustomSearch />}
              placeholder="Search by Title or Author"
              name="text"
              fullWidth={true}
              sx={{ position: "relative", left: "10%", width: "650px" }}
              onChange={(e)=>{setSearch(e.target.value); console.log(search)}}
              value={search}
            />
          </div>
        </Grid>
          {search===""?basicRender():searchRender()}
        
      </Grid>

      <Footer />
    </div>
  );
};

export default Entrepreneurship;
