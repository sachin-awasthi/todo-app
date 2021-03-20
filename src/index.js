import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import { App } from './App';
import Details from './components/Details/Details';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/details" component={Details} />
    </Switch>
  </Router>,
  document.getElementById('root')
);