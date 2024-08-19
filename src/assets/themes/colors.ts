import {createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A85FF",
      contrastText: "#FCFCFCBF",
      dark: "#1A1D1F",
      light: "#FFFFFF",
    },
    grey: {
      400: "#EFEFEF",
      500: "#F4F4F4",
      600: "#9A9FA5",

    },
    error: {
      main: "#FFBC9940",
      contrastText: "#FF6A55",
    },
    success: {
      main: "#B5E4CA",
    }
  },
});

export default theme
// export const themes = {
//     primary: "#2A85FF",
//     primary_color: "#FCFCFCBF",
//     error: "#FFBC9940",
//     backgroundGrey: "#F4F4F4",
//     colorGrey: "#6F767E"
// };
