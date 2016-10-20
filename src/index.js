import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducers/index';

import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './smart/home';
import Watch from './smart/projects';
import Lessons from './smart/lessons';
import Bio from './smart/bio';
import Contact from './smart/contact';
import Grid from './smart/grid';

const store = createStore(RootReducer,applyMiddleware(thunkMiddleware));
export default store;

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="watch" component={ Watch } />
        <Route path="grid" component={ Grid } />
        <Route path="bio" component={ Bio } />
        <Route path="contact" component={ Contact } />
        <Route path="lessons" component={ Lessons } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
