import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link } from 'react-router'
import Backbone from 'backbone';
import Modal from './Modal'
import App from './App'
import Picture from './Picture'
import Home from './Home'

const history = useBasename(createHistory)({
  basename: '/pinterest'
});


render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/pictures/:id" component={Picture}/>
    </Route>
  </Router>
), document.getElementById('rootElement'));
