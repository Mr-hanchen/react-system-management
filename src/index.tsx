import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { Spin } from 'antd';
import App from "./App";

ReactDOM.render(
  <>
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Spin />}>
              <Router>
                  <Switch>
                      <Route path={"/login"} component={loadable(() => import("./views/Login"))} />
                      <Route path={"/404"} component={loadable(() => import("./views/404"))} />
                      <Route path={"/"} render={() => {
                          let isLogin = store.getState().login.isLogin;
                          return isLogin ? (<App />) : (<Redirect to={"/login"} />);
                      }} />
                  </Switch>
              </Router>
          </PersistGate>
      </Provider>
  </>,
  document.getElementById('root')
);

reportWebVitals();
