import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from '../containers/Dashboard'
import Page404 from '../components/Page404'
import Header from '../components/Header'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route component={Page404} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter
