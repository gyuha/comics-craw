// eslint-disable-next-line
import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/index';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
