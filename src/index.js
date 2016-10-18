import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './smart/home';
import Projects from './smart/projects';
import Lessons from './smart/lessons';
import Bio from './smart/bio';
import Contact from './smart/contact';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="projects" component={ Projects } />
      <Route path="bio" component={ Bio } />
      <Route path="contact" component={ Contact } />
      <Route path="lessons" component={ Lessons } />
    </Route>
  </Router>,
  document.getElementById('root')
);
