import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as Icon from '@material-ui/core/'
import red from '@material-ui/core/colors/red';

const styles = {
    root: {
      flexGrow: 1,
    },
    appBar: {
        color: red
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

function ButtonAppBar(props) {
    const { classes } = props;
    return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} >
            <Toolbar className={classes.appBar} >
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
                DnD
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
    )
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ButtonAppBar);