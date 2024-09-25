// src/App.tsx
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';

import './assets/iconfont/iconfont.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* Login 页面 */}
        <Route path="/login" component={Login} />

        {/* Main 页面布局，嵌套路由 */}
        <Route
          path="/"
          render={() => (
            <Main>
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/settings" component={Settings} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Main>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
