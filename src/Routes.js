import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {
  AboutPage,
  ArticlePage,
  AuthorPage,
  Homepage,
  MainLayout,
} from './components';

const routes = (
  <Router history={browserHistory}>
    <Route component={MainLayout} >
      <Route path='/' component={Homepage} />
      <Route path='/articles' component={ArticlePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/authors' component={AuthorPage} />
    </Route>
  </Router>
)

export default routes
