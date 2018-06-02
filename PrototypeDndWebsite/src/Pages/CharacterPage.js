import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Card, CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import TableCard from '../Components/TableCard'
import TableCardV2 from '../Components/TableCardV2'
import ProgressBarCard from '../Components/ProgressBarCard'
import { experience, characterInfo, stats } from '../Data/DataStore'

export default class CharacterPage extends Component{
    render() {
        return (
                <Grid container>
                    <Grid item xs={12}>
                        <Paper style={{ margin: 10, padding: 10 }}>
                            <h1>Character Page</h1>
                            <Grid container spacing={16}>
                                <Grid item xs={4}>
                                    <TableCardV2 title={"Character Info"} data={characterInfo}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <ProgressBarCard title={"Stats"} data={stats}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <TableCardV2 title={"Experience & Movement"} data={experience}/>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        )
    }
}