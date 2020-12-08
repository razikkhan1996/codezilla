import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import {pink,blueGrey} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary:pink,
    secondary:blueGrey
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

