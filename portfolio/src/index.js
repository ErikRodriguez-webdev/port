import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Router
import { BrowserRouter as Router } from "react-router-dom";

//MUI
import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[500],
    },
  },
  breakpoints: {
    values: {
      mobile: 550,
      tablet: 750,
      laptop: 1000,
    },
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          transform: "rotate(45deg)",
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          ":before": { content: "none" },
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          padding: "5px",
        },
      },
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          padding: "5px",
        },
      },
    },
  },
  typography: {
    body1: {
      fontSize: "1.3rem",
    },
    button: {
      fontSize: "1.1rem",
    },
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
