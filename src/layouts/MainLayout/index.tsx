// eslint-disable-next-line
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core';
import TitleBar from './TitleBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      height: '100vh',
      width: '100%',
      // borderRadius: '10px',
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: '50px',
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      backgroundColor: 'white',
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
    },
  })
);
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MainLayout = (props: unknown) => {
  // const classes = useStyles();
  // const { pathname } = useLocation();

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <TitleBar />
      </ElevationScroll>
      <Container>
        <Box my={2}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default MainLayout;
