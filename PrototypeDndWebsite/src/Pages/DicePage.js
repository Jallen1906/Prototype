import React, { Component } from 'react';
import { Button, ButtonGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'

export class DicePage extends Component {

    constructor(){
        super();
        this.state = {
            bonus: 0,
            roll: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        return (
        <div>
            <div>
                <h1>Dice Page</h1>
            </div>
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Bonus</InputGroupAddon>
                    <Input type="number" value={this.state.bonus} onChange={this.handleChange} />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Roll</InputGroupAddon>
                    <Input value={this.state.roll} />
                </InputGroup>
                <ButtonGroup>
                    <Button onClick = {() => {this.decreaseBonus()}}>- 1</Button>
                    <Button onClick = {() => {this.rollDice()}}>Roll</Button>
                    <Button onClick = {() => {this.increaseBonus()}}>+ 1</Button>
                </ButtonGroup>
            </div>
        </div>
         );
    }

    increaseBonus() {

        var newValue = (this.state.bonus) + +1
        this.setState({
            bonus: newValue
        })
    }

    decreaseBonus() {
        var newValue = (this.state.bonus) - +1
        this.setState({
            bonus: newValue
        })
    }

    rollDice() {
        var random = Math.floor((Math.random() * 20) + 1)
        var bonus = this.state.bonus
        var rollResult = +random + +bonus

        this.setState({
            roll: rollResult
        })
    }
    handleChange(event) {
        this.setState({ bonus: event.target.value });
    }

}