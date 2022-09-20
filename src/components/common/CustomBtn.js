import { Button } from "@material-ui/core";
import {createTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#4EB8B9",
      },
      secondary: {
        main: "#D3D3D3",
      },
      warning: {
        main: "#B0DFDB"
      }
    },
  });
  
  export default function Palette(props) {
    return (
      <ThemeProvider theme={theme}>
        <Button 
        color={props.color} 
        variant="contained" 
        id={props.id}
        onClick={props.clickEvt}>{props.title}</Button>
      </ThemeProvider>
    );
  }