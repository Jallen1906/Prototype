import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'

const styles = {

    root: {
        flexGrow: 1,
      },
      drawerPaper: {
        position: 'relative',
      },

}

function DrawerMenu(props) {
    const { classes } = props;

    return (
        <Drawer  
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.toolbar} />
        <Divider />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
        <Divider />
            <List>
                <ListItem button component={Link} to="/character">
                    <ListItemText primary="Character" />
                </ListItem>
            </List>
        <Divider />
            <List>
                <ListItem button component={Link} to="/dice">
                    <ListItemText primary="Dice" />
                </ListItem>
            </List>
        <Divider />
            <List>
                <ListItem button component={Link} to="/session">
                    <ListItemText primary="Session Log" />
                </ListItem>
            </List>
        <Divider />
        </Drawer>
    )
}

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(DrawerMenu);