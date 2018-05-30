import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './Routing/Routes';

let routes = RoutesModule.routes;

function renderApp(){
ReactDOM.render(
    <BrowserRouter children={ routes }  />, 
    document.getElementById('root'));
registerServiceWorker();
}

renderApp();
