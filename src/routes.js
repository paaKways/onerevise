import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Admin, Dashboard, Browse, Home } from './pages'

const routes = (
    <Switch>
        <Route path='/browse/:id' component={Browse}></Route>
        <Route path='/browse' component={Browse}></Route>
        <Route path='/site-admin' component={Admin}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/' component={Home}></Route>
    </Switch>
)

export default routes