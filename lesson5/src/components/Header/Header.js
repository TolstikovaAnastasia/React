import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { getChatsPath } from "../../navigation/Navigation";


const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'center',
    overflowX: 'auto',
    backgroundColor: 'rgb(10, 25, 41)',
    borderStyle: 'solid',
    borderColor: 'rgb(19, 47, 76)',
    borderWidth: '0px 0px thin',
  },
  toolbarLink: {
    padding: '16px',
    flexShrink: 0,
    color: '#fff',
    cursor: 'pointer'
  },
}));

export const Header = (props) => {
  const classes = useStyles();

  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to="/"
        className={classes.toolbarLink}
      >
        Home
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to="/profile"
        className={classes.toolbarLink}
      >
        Profile
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to={getChatsPath()}
        className={classes.toolbarLink}
      >
        Chats
      </Link>
    </Toolbar>
  );
}