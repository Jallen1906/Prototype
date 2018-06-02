import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core';

function NotePaper(props) {

    return(
        <Fragment>
            <Paper style={{ margin: 10, padding: 10 }}>
                <Typography variant="body2" gutterBottom>
                    {props.text}
                </Typography>
            </Paper>
        </Fragment>
    )
}

export default NotePaper