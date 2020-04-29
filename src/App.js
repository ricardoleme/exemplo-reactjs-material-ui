import React from "react";
import Routes from "./routes";
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
/* Cores */
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

let theme = createMuiTheme(
  {
    palette: {
      primary: blue,
      secondary: orange,
    },
  }

);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />;
    </MuiThemeProvider>
  )
}

export default App;
