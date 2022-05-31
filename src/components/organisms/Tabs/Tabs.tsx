import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const customTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#42c2f5",
        main: "#22C870",
        dark: "#778899",
        contrastText: "#fff"
      }
    }
  });

export default function ColorTabs(props:any) {
  const [value, setValue] = React.useState('one');

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
     setValue(newValue);
   
   };

  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        TabIndicatorProps={{
            style: {
              backgroundColor: "#22C870"
             }
            }}
        
      >
        <Tab value="one" style={{marginRight:"100px"}} label="Currently Reading"  onClick={()=>{props.displayCards("currentlyReading")}} />
        <Tab value="two" style={{marginRight:"100px"}} label="Finished" onClick={()=>{props.displayCards("Finished")}}/>
        
      </Tabs>
    </Box>
    </ThemeProvider>
  );
}
