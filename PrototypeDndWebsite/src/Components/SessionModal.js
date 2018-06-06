import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField, Typography } from '@material-ui/core';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
      },
})

function SessionModal(props) {
    const { classes } = props;
    return(
        <Modal
         open = {props.open}>
         <div style={{width: 1000, top: 50, left: 300}} className={classes.paper}>
            <TextField style={{width: 1000}}
            multiline
            label="Note"
            placeholder="Enter text here..." />
            <br />
            <br />
           <Button variant="raised" color="primary" onClick={props.onClose} style={{ left: 910}}>
               Submit
           </Button> 
         </div>
        </Modal>
    )
}

SessionModal.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SessionModal);