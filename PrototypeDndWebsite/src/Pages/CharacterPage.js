import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Container, Col, Progress, Row} from 'reactstrap'

export class CharacterPage extends Component {

    render(){

        return (
        <div>
            <div>
                <h1>Character Page</h1>
            </div>
            <div> 
                <Row> 
                <Col xs="3">
                <Card>
                    <CardBody>
                        <CardTitle className="text-center"><strong>Character Information</strong></CardTitle>
                        <div className="text-left"><span><strong>Name: &ensp;</strong></span> Macualay McCroy</div>
                        <div className="text-left"><span><strong>Class: &ensp;</strong></span>Barbarian</div>
                        <div className="text-left"><span><strong>Backgroud/Race: &ensp;</strong></span> Folk Hero/Halfling</div>
                        <div className="text-left"><span><strong>Alignment: &ensp;</strong></span> Lawful Good</div>
                        <div className="text-left"><span><strong>Languages: &ensp;</strong></span> Common/Halfling</div>
                    </CardBody> 
                </Card>
                </Col>
                <Col xs="3">
                <Card>
                    <CardBody>
                        <CardTitle className="text-center"><strong>Stats</strong></CardTitle>
                        <div className="text-center">Armor: 20/25</div>
                        <Progress value="80"/>
                        <div className="text-center">Health: 10/25</div>
                        <Progress value="40"/>
                    </CardBody> 
                </Card>
                </Col> 
                </Row>
            </div>
        </div>
         );
    }
}