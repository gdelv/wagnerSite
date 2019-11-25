import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'

export const Routes = (props) => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path ='/contact' component={Contact}/>
        </Switch>
    )
}
