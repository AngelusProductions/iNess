import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from '../containers/Dashboard'
import Page404 from '../components/Page404'
import Header from '../components/Header'

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route component={Page404} />
            </Switch>
        </Router>
    )
}
export default AppRouter
