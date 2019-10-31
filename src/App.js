import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn/signin";
import SignUp from "./components/SignUp/signup";
import SignOutButton from "./components/SignOut/SignOut";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />

      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
    </div>
  </Router>
);

export default App;
