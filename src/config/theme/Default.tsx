import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#ffff',
      main: '#FFE9EC',
    },
    secondary: {
      light: '#FFF3F5',
      main: '#FFD5DA',
    },
    error: {
      main: '#c06771',
    },
  },
  //   components: {
  //     // Name of the component
  //     MuiPaper: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           padding: "20px",
  //           borderRadius: "10px",
  //         },
  //       },
  //     },
  //   },
});

export default defaultTheme;
