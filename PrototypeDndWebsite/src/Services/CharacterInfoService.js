import React, { Component } from 'react'

import axios from "axios";

class Service extends Component {

    constructor () {
        super()
        this.state = {
          username: ''
        }
    
      }
    
      componentDidMount() {
        axios.get('http://demo3747005.mockable.io/Test')
        //.then(response => console.log(response.data))
          .then(response => this.setState({username: response.data.value}))
      }
    
      render () {
        return (
          <div className='button__container'>
            <p>{this.state.username}</p>
          </div>
        )
      }
    }

export default Service