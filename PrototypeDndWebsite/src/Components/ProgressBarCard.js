import React, { Component, Fragment } from 'react'
import { Card, CardContent, CardHeader, Typography, LinearProgress} from '@material-ui/core'

export default class ProgressBarCard extends Component {
    constructor(props){
        super(props)
    }
    render(){
    return (
        <Card>
            <CardHeader title={this.props.title}/>            
            <CardContent>
            {this.props.data.map(n => {
                return (
                    <Fragment>
                        <Typography component="p">
                            {n.name}: {n.current}/{n.total}
                        </Typography>
                        <LinearProgress variant="determinate" value={this.calculatePercentage(n.current, n.total)} />
                        <br/>
                    </Fragment>
                );
            })}
            </CardContent>
        </Card>            
    )
    }

    calculatePercentage(current, total) {
        var percentage = (current/total)*100;
        return percentage
    }
}
