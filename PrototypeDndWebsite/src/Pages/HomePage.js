import React, { Component, Fragment } from 'react'

import Service from '../Services/CharacterInfoService'

export default class HomePage extends Component{
    render() {
        return (
            <Fragment>
                <h1>Home Page</h1>
                <Service />
            </Fragment>
        )
    }
}