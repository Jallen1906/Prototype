import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import NotePaper from '../Components/NotePaper'
import { notes } from '../Data/DataStore'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

export default class SessionLog extends Component{
    render() {
        return (
            <Fragment>
                <Paper style={{ margin: 10, padding: 10 }}>
                <Button variant="fab">
                    <AddIcon />
                </Button>
                <h1>Session Log Page</h1>
                
                {notes.map(n => {
                    return (
                        <NotePaper text={n.text}/>
                    )
                })}
                </Paper>
            
            </Fragment>
        )
    }
}