import React from 'react';
// libraries
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// Pages
import HomePage from 'page/home_page';

export const publicRouteList = [
  {
    path: '/',
    component: HomePage,
    page: 'home',
  },
];

export const AppContext = React.createContext();

const Dashboard = ({ children }) => {
  return <>{children}</>;
};

const Routes = (props) => {
  const routeComponents = publicRouteList.map((route, key) => (
    <Route
      exact
      path={route.path}
      key={key}
      render={(routeProps) => {
        return (
          <Dashboard page={route.page}>
            <route.component {...routeProps} />
          </Dashboard>
        );
      }}
    />
  ));

  return (
    <AppContext.Provider>
      <Router>
        <Switch>
          {routeComponents}
          <Redirect to="/" />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default Routes;