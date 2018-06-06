import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import NotePaper from '../Components/NotePaper'
import { notes } from '../Data/DataStore'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal'
import FloatingAddButton from '../Components/FloatingAddButton'
import SessionModal from '../Components/SessionModal'
import SessionSnackbar from '../Components/SessionSnackBar'

export default class SessionLog extends Component{

    constructor() {
        super()
        this.state = {
            modalOpen: false,
            snackbarOpen: false,
        }

        this.handleModalOpen = () => {
            this.setState({ modalOpen: true })
        };

        this.handleModalClose = () => {
            this.setState({ modalOpen: false,
                            snackbarOpen: true })
        };

        this.handleSnackbarClose = () => {
            this.setState({ snackbarOpen: false})
        };
    }
    render() {
        return (
            <Fragment>
                <Paper style={{ margin: 10, padding: 10 }} >
                    <FloatingAddButton onClick={this.handleModalOpen}/>
                    <h1>Session Log Page</h1>
                    <SessionModal open={this.state.modalOpen} onClose={this.handleModalClose}/>
                    <SessionSnackbar open={this.state.snackbarOpen} onClose={this.handleSnackbarClose}/>
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