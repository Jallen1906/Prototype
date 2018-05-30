import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavMenu } from '../src/Component/NavMenu'

export class App extends Component {
  render() {
    return (
      <div> 
          <div>
              <div> 
                  <NavMenu />
              </div>
              <div>
                  { this.props.children }
              </div>
          </div>
      </div>
    );
  }
}

export default App;
