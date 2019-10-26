import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import Dashboard from "./components/Dashboard";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <SignIn>
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_OUT} component={SignOut} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
      </SignIn>
    </div>
  </Router>
);

export default App;
