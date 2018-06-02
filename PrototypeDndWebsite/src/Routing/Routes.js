import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CharacterPage from '../Pages/CharacterPage'
import DicePage from '../Pages/DicePage'
import HomePage from '../Pages/HomePage'
import SessionLog from '../Pages/SessionLogPage'

const Routes = () => (
<Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/dice' component={DicePage}/>
    <Route path='/character' component={CharacterPage}/>
    <Route path='/session' component={SessionLog}/>
</Switch>
)

export default Routes