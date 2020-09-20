// eslint-disable-next-line
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '10px',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
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

const MainLayout = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {pathname}
            <Outlet />
            ddd
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
