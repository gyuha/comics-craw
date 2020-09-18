import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        // '-webkit-app-region': 'drag',
      },
      a: {
        textDecoration: 'none',
      },
      '.App': {
        minHeight: '100vh',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: 'white',
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
