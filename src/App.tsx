import { ThemeProvider } from '@material-ui/core';
// eslint-disable-next-line
import React from 'react';
import { useRoutes } from 'react-router';
import routes from './routes';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/index';

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

export default App;
