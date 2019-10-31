import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import PasswordForget from "./components/PasswordForget/passwordforget"
import SignIn from "./components/SignIn/signin";
import SignUp from "./components/SignUp/signup";
import SignOutButton from "./components/SignOut/signout";


import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session/withAuthentication";

const App = () => (
  <Router>
    <SignIn>
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />

      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
    </div>
    </SignIn>
  </Router>
);

export default withAuthentication(App);



