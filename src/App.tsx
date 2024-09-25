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
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ButtonPage from './pages/ui/Button';
import CarouselPage from './pages/ui/Carousel';
import GalleryPage from './pages/ui/Gallery';
import GlobalMessage from './pages/ui/GlobalMessage';
import LoadingPage from './pages/ui/Loading';
import NotificationPage from './pages/ui/Notice';
import PopupPage from './pages/ui/Popup';
import TabPage from './pages/ui/Tabs';
import LoginPage from './pages/form/Login';
import RegPage from './pages/form/Reg';
import GridBasic from './pages/grid/Base';
import AdvanceGrid from './pages/grid/Advance';
import CityMgmt from './pages/city/Index';
import OrderMgmt from './pages/order/Index';
import UserMgmt from './pages/employee/Index';
import BikeMap from './pages/map/Index';
import AuthPge from './pages/auth/Index';
import PiChart from './pages/chart/Pi';
import BarChart from './pages/chart/Bar';
import LineChart from './pages/chart/Line';

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
                {/* ui */}
                <Route exact path="/ui/buttons" component={ButtonPage} />
                <Route exact path="/ui/modals" component={PopupPage} />
                <Route exact path="/ui/loadings" component={LoadingPage} />
                <Route
                  exact
                  path="/ui/notification"
                  component={NotificationPage}
                />
                <Route exact path="/ui/messages" component={GlobalMessage} />
                <Route exact path="/ui/tabs" component={TabPage} />
                <Route exact path="/ui/gallery" component={GalleryPage} />
                <Route exact path="/ui/carousel" component={CarouselPage} />
                {/* form */}
                <Route exact path="/form/login" component={LoginPage} />
                <Route exact path="/form/reg" component={RegPage} />
                {/* table */}
                <Route exact path="/table/basic" component={GridBasic} />
                <Route exact path="/table/adv" component={AdvanceGrid} />
                {/* city */}
                <Route exact path="/city" component={CityMgmt} />
                {/* order */}
                <Route exact path="/order" component={OrderMgmt} />
                {/* user */}
                <Route exact path="/user" component={UserMgmt} />
                {/* bikeMap */}
                <Route exact path="/bikeMap" component={BikeMap} />
                {/* charts */}
                <Route exact path="/charts/bar" component={BarChart} />
                <Route exact path="/charts/pie" component={PiChart} />
                <Route exact path="/charts/line" component={LineChart} />
                {/* permission */}
                <Route exact path="/permission" component={AuthPge} />

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
