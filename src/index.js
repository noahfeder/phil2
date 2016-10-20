import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducers/index';

import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './smart/home';
import Lessons from './smart/lessons';
import Bio from './smart/bio';
import Contact from './smart/contact';
import Watch from './smart/watch';
import Look from './smart/look';
import Listen from './smart/listen';

const store = createStore(RootReducer,applyMiddleware(thunkMiddleware));
export default store;

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="watch" component={ Watch } />
        <Route path="bio" component={ Bio } />
        <Route path="look" component={ Look } />
        <Route path="listen" component={ Listen } />
        <Route path="contact" component={ Contact } />
        <Route path="lessons" component={ Lessons } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
