import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn/Signin";
import SignUp from "./components/SignUp/Signup";
import SignOut from "./components/SignOut/Signout";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_OUT} component={SignOut} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;
