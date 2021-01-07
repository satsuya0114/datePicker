import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PATH from './path';

const LoadingComponent = (Component) => (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);
const Home = LoadingComponent(lazy(() => import('~modules/Home')));
const CalendarDemo = LoadingComponent(lazy(() => import('~modules/CalendarDemo')));
const NotFound = LoadingComponent(lazy(() => import('~modules/NotFound')));

const routes = () => (
  <Switch>
    <Route path={PATH.HOME} exact render={Home} />
    <Route path={PATH.CALENDERDEMO} render={CalendarDemo} />
    <Route path={PATH.ERROR} render={NotFound} />
    <Redirect from="*" to={PATH.ERROR} />
  </Switch>
);

export default routes;
