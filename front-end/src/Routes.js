import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './core/Home';
import Signin from './users/Signin';
import Signup from './users/Signup';
import Menu from './core/Menu';

const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path= '/' exact component = {Home} />
                <Route path= '/signin' exact component = {Signin} />
                <Route path= '/signup' exact component = {Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
