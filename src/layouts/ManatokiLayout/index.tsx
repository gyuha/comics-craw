// eslint-disable-next-line
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

const ManatokiLayout = () => {
  const classes = useStyles();
  // const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      asdf
      <br />
      asdf
      <br />
      asdf
      <br />
      asdf
      <br />
      asdf
      <br />
      {/* <NavBar onMobileClose={() => setMobileNavOpen(false)} openMobile={isMobileNavOpen} /> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <div style={{ width: '300px', height: '300px', backgroundColor: 'red' }} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManatokiLayout;
