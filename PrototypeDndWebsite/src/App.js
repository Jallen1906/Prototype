import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './Layouts/Layout'
import { withTheme } from '@material-ui/core/styles'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default withTheme(theme)(App);
