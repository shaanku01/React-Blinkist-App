
import { ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../components/molecules/Card/Card";
import Footer from "../components/molecules/footer/Footer";
import Header from "../components/organisms/Header";
import mylist from "./input.json";
import Styles from "./MyLibrary.module.css";
import CustomTabs from "../components/organisms/Tabs/Tabs";

import Typographys from "../components/atoms/Typography/Typography";
import api from '../api/books';


const MyLibrary = () => {
  const [tabs, setTab] = useState("currentlyReading");

  const [data,setData] = useState(mylist);

  const [mybool,setMyBool] = useState(true);

  // API CALL:

  const retrieveBooks = async ()=>{
    const response = await api.get('/books'); 
    return response.data;
  }

  useEffect(()=>{

    const getAllBooks = async()=>{
      const allBooks = await retrieveBooks();
      if(allBooks)
      setData(allBooks);
    }

    getAllBooks();
},[])


//-------------

  function formatTab(tab: string) {
    setTab(tab);
  }

  const modifyData= (id:number)=>{
    console.log(id);

    if(tabs == 'currentlyReading'){

      setData((prev)=>{
        let prev1 = prev;
        for(let i=0;i<prev1.length;i++){
          if(prev1[i].id == id){
            prev1[i].readstatus="Finished";
          }
        }
        return prev1;
        
      })
      
    }else if(tabs == 'Finished'){
      setData((prev)=>{
        let prev1 = prev;
        for(let i=0;i<prev1.length;i++){
          if(prev1[i].id == id){
            prev1[i].readstatus="currentlyReading";
          }
        }
        return prev1;

      })
      
    }
    setMyBool((prev)=>{
      return !prev;
    });  
  }

  const renderCards= ()=>{
    return(
      <Grid item xs={7} data-testid="card-grid">
      {data
        .filter((item) => {
          return item.readstatus == tabs;
        })
        .map((item) => {
          return (
            <div style={{margin:"20px",display:"inline-block"}}>
              <Card
                id={item.id}
                picturenumber={item.picturenumber}
                Heading={item.Heading}
                subheading={item.subheading}
                minuteread={item.minuteread}
                buttonText={
                  tabs == "Finished" ? "Read Again" : "Finished"
                }
                modifyData = {modifyData}
                totalreads={item.totalreads}
                currentTab={tabs}
              />
            </div>
          );
        })}
    </Grid>

    );
  }

  return (
    <div data-testid="myLibrary">
      <Header />

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={12} paddingLeft={22} className={Styles.mainheading} data-testid="Header">
          <Typographys
            variant="h1"
            content="My Library"
            styles={{ marginBottom: "10px" }}
            
          />
        </Grid>
        <Grid item xs={12} paddingLeft={22} className={Styles.mainheading}>
          <CustomTabs displayCards={formatTab} />
        </Grid>

        <Grid container>
        <Grid item xs={1.1}></Grid>
          {mybool?renderCards():renderCards()}

          <Grid item xs={3}></Grid>
        </Grid>

        {/* {
        mylist
          .filter((item) => {
            return item.readstatus == tabs  ;
          })
          .map((item) => {
            return (
              <Grid item spacing={0} xs={4} paddingLeft={22} marginTop={10} marginBottom={10}>
                <Card
               
                  picturenumber={item.picturenumber}
                  Heading={item.Heading}
                  subheading={item.subheading}
                  minuteread={item.minuteread}
                  buttonText={tabs=='Finished'?"Read Again":"Finished"}
                />
              </Grid>
            );
          })} */}
      </Grid>

      <Footer />
    </div>
  );
};

export default MyLibrary;
