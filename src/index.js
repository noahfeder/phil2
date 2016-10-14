import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './smart/home';
import Projects from './smart/projects';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>,
  document.getElementById('root')
);
