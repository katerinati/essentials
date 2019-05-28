import React from 'react';
import AppRouter from "./routes";
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { theme } from './theme/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline/>
            <AppRouter />
        </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
