import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import CourseForm from "views/CourseForm";
import SignIn from "views/Pages/SignIn";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/auth/signin`} component={SignIn} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/rtl`} component={RTLLayout} />

      <Redirect from={`/`} to="/auth/signin" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
