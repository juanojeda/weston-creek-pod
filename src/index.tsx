import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './utils/GlobalStyles';
import { theme } from './utils/theme';
import { Fonts } from './components/Fonts';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Fonts />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
