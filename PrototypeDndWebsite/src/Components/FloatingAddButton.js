import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        position: 'absolute',
        top: theme.spacing.unit * 13,
        right: theme.spacing.unit * 5
    },
  });

function FloatingAddButton(props) {
    const { classes } = props;
    return(
        <Fragment>
            <Button className={classes.root} variant="fab" color="primary" aria-label="add" onClick={props.onClick}>
                <AddIcon />
            </Button>
        </Fragment>
    )
}

FloatingAddButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(FloatingAddButton);

