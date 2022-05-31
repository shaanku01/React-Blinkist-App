import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import data from "../../../pages/input.json";
import Styles from "./searchbar.module.css";

export default function CustomTextFiled() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  //--

  const result:any[] = []
  const [filteredData, setFilteredData] = useState(result);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event:any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.Heading.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      
      setFilteredData(newFilter);
    }
  };

  

  //--

 

  return (
      
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        marginLeft:"10px",
        marginRight:"30px"
      }}
      noValidate
      autoComplete="off"
    >    
      
      {/* <div>
        <TextField
          id="standard-multiline-flexible"
          label=""
          multiline
          maxRows={4}
          value={wordEntered}
          onChange={handleFilter}
          variant="standard"
        />       
      </div> */}


<div className={Styles.search}>
      <div >
      <TextField
          id="standard-multiline-flexible"
          label=""
          multiline
          maxRows={4}
          value={wordEntered}
          onChange={handleFilter}
          variant="standard"
        />  
        
      </div>
      {filteredData.length != 0 && (
        <div className={Styles.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className={Styles.dataItem} href={"/detailed"} >
                <p>{value.Heading} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  




      
    </Box>

    
  );
}