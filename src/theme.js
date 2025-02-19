import { createTheme } from "@mui/material/styles";
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';


export const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
    },
    myColor:{
      light: red[300],
      main: red[500],
      dark: red[700],
      darker: red[900],
    }
  },
});
