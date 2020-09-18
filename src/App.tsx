// eslint-disable-next-line
import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <p>
            Edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
