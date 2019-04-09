import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'

export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/about' component={About}/>
    </Switch>
)