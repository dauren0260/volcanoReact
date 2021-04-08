import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/style.css';
import App from './App';
import Register from './containers/register/register';
import Login from './containers/login/login';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={App}/>
      <Route paht="/register" component={Register} />
      <Route paht="/login" component={Login} />
    </Switch>
  </BrowserRouter>
 ,
  document.getElementById('root')
);

