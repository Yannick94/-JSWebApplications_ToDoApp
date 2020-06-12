import React from 'react';
import './css/styles.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import Todos from './components/todos';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Todo Application</h1>
	      <p data-auth="true"><span data-field="user.name"></span> | <Link to="/logout">Logout</Link></p>
      </header>
      <Switch>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/todos">
        <Todos />
      </Route>
      <Route path="/">
        <Login />
      </Route>
      </Switch>
      <footer><p>2019</p></footer>
    </div>
    </Router>
  );
}

export default App;

