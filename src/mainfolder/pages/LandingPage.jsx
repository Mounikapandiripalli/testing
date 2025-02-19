// import React from "react";
// import Navbar from "../components/navsection/navbar";
// import { Box, Container } from "@mui/material";

// const LandingPage = () => {
//   return (
//     <Container>
//       <Box>
//         <Navbar />
//       </Box>
//     </Container>
//   );
// };

// export default LandingPage;

import React from 'react'
import Navbar from '../components/navsection/navbar'
import Herosection from '../components/hero/Herosection'
import AccordianSection from '../components/AccordianSection'
import CardDisplay from '../components/CardSection/CardDisplay'
import MainTab from '../components/TabsSection/MainTab'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <AccordianSection/>
      <CardDisplay/>
      <MainTab/>
    </div>
  )
}

export default LandingPage
