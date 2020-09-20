import {
  AppBar,
  createStyles,
  fade,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import eletron from 'electron';
// eslint-disable-next-line
import React from 'react';
import { MdClose } from 'react-icons/md';

const { remote } = eletron;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '50px',
    },
    grow: {
      flexGrow: 1,
    },
    dragble: {
      '-webkit-app-region': 'drag',
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

type TopBarProps = {
  className?: string;
};

const TitleBar = ({ className, ...rest }: TopBarProps) => {
  const classes = useStyles();

  const close = () => {
    console.log('click');
    remote.getCurrentWindow().close();
  };

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar variant="dense">
        <Typography className={clsx(classes.title, classes.dragble)} variant="h3" noWrap>
          Comics craw
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={clsx(classes.grow, classes.dragble)} style={{ height: '100%' }} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show more" aria-haspopup="true" onClick={close} color="inherit">
            <MdClose />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
