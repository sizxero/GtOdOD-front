import { Button } from "@material-ui/core";
import {createTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#4EB8B9",
      },
    },
  });
  
  export default function Palette() {
    return (
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained" id="login-btn">LOGIN</Button>
      </ThemeProvider>
    );
  }