import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from '../Components/AppBar'
import DrawerMenu from '../Components/Drawer'
import Main from '../Routing/Routes'

export class Layout extends Component {

    render(){
        return(
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="display1" gutterBottom align="center">
                        <ButtonAppBar />
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid item xs={2}>
                        <DrawerMenu />
                    </Grid >
                    <Grid item xs={10}>
                        <Main />
                    </Grid >
                </Grid>
            </Grid>
        )
    }
}