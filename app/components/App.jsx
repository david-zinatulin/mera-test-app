import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage/DashboardPage';
import NotFoundPage from './NotFoundPage';

const App = () => (
    <Switch>
        <Route exact path="/login" render={() => <LoginPage title="Login" />} />
        <Route exact path="/dashboard" render={() => <DashboardPage title="Dashboard" />} />
        <Route exact path="" render={() => <NotFoundPage title="Page not found" />} />
    </Switch>
);

export default App;
