import * as React from 'react';
import { Route } from 'react-router-dom';
import { App } from '../App';
import { DicePage } from '../Pages/DicePage';
import { HomePage } from '../Pages/HomePage';
import { LogPage } from '../Pages/LogPage';
import { CharacterPage } from '../Pages/CharacterPage';

export const routes = <App>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/dice' component={ DicePage } />
        <Route exact path='/log' component={ LogPage } />
        <Route exact path='/character' component={ CharacterPage } />
    </App>;