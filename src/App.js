import React from 'react';
import './css/styles.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import Todos from './components/todos';
import Home from './components/home';

function App() {
  return (
    <Router>

      <Switch>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/todos">
        <Todos />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;

