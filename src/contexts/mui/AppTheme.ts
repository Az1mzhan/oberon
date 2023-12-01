import { ThemeOptions } from "@mui/material";

// Use <CssBaseLine/> to enable properly MUI custom theme
export const AppTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#7ade01",
    },
    secondary: {
      main: "#F9D949",
    },
    background: {
      // Common background
      default: "#1b1b1f",
      // "Levitating" elements, e.g. <Paper></Paper>
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    transitions: {
      duration: {
        enteringScreen: 2000,
        leavingScreen: 100,
      },
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
};

// #5D3891
