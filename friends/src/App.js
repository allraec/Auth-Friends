import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Friends from "./components/Friends"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route component={Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
