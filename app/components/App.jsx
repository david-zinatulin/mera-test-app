import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import NotFoundPage from './NotFoundPage';

const App = () => (
  <Switch>
    <Route
      exact path="/login" render={
        () => (<LoginPage title="Login" />)
      } />
    <Route
      exact path="/dashboard" render={
        () => (<DashboardPage title="Dashboard" />)
<<<<<<< master
      } />
    <Route
      exact path="" render={
        () => (<NotFoundPage title="Page not found" />)
      } />
=======
      }/>
      <Route
      exact path="" render={
        () => (<LoginPage title="Login" />)
      }/>    
>>>>>>> Login html and css
  </Switch>
);

export default App;
