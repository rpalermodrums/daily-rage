import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {
  ArticlePage,
  Homepage,
  MainLayout,
} from './components';

const routes = (
  <Router history={browserHistory}>
    <Route component={MainLayout} >
      <Route path='/' component={Homepage} />
      <Route path='/articles' component={ArticlePage} />
    </Route>
  </Router>
)

export default routes
