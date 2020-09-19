// eslint-disable-next-line
import { ThemeProvider } from '@material-ui/core';
import fs from 'fs';
import path from 'path';
// import MainLayout from './layouts/MainLayout';
// import AppConfig from './AppConfig';
import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/index';

function App() {
  const onClick = () => {
    const t = fs.readFileSync(path.resolve('./tsconfig.json'), 'utf8');
    console.log(t);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <input type="button" onClick={onClick} value="test" />
      {/* <MainLayout /> */}
    </ThemeProvider>
  );
}

export default App;
