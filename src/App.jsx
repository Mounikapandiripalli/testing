import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import {styled} from '@mui/material';
import LandingPage from './mainfolder/pages/LandingPage'



const MyButton=styled(Button)({
  backgroundColor : "black",
  color:"white",
  fontSize: 15,
  "&:hover": {
    backgroundColor: "#45a049",
  },
})

const App = () => {
  return (
    // <>
    //   <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
    //     This Box renders as an HTML section element.
    //     <Button variant="text">Text</Button>
    //     <Button variant="contained">Contained</Button>
    //     <Button variant="outlined">Outlined</Button>
    //     <MyButton>My button</MyButton>
    //   </Box>
    // </>
    <Box>
      <LandingPage/>
      
      
    </Box>
  );
};

export default App;
