import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap'

export class LogPage extends Component {
    constructor(){
        super()
        var Arr = ["Test1", "Test2", "Test3"]
    }
    render(){

        return (
        <div>
            <h1>Log Page</h1>
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </div>
         );
    }

    
}