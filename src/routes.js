import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Admin, Dashboard, Browse, Home } from './pages'

const routes = (
    <Switch>
        <Route path='/app/browse/:id' component={Browse}></Route>
        <Route path='/app/browse' component={Browse}></Route>
        <Route path='/app/admin' component={Admin}></Route>
        <Route path='/app/dashboard' component={Dashboard}></Route>
        <Route path='/' component={Home}></Route>
    </Switch>
)

export default routes