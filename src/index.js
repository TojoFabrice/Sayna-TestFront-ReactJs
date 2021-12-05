import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './assets/css/style.css';
import "bootstrap/dist/css/bootstrap.css";
import AdminLayout from "./layouts/Admin"


ReactDOM.render(
  <BrowserRouter>
   <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

