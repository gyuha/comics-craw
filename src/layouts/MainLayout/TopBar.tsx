import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
// eslint-disable-next-line
import React from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from 'src/components/Logo';
import eletron from 'electron';

const { remote } = eletron;

const useStyles = makeStyles({
  root: {
    'border-top-right-radius': '10px',
    'border-top-left-radius': '10px',
    '-webkit-app-region': 'drag',
  },
  toolbar: {
    height: 10,
  },
});

type TopBarProps = {
  className?: string;
};

const TopBar = ({ className, ...rest }: TopBarProps) => {
  const classes = useStyles();

  const close = () => {
    console.log('click');
    remote.getCurrentWindow().close();
  };

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <Logo />
        </Link>
        <MdClose onClick={close} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
