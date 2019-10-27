import React from "react";

import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import SignOut from "./components/SignOut/SignOut";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <SignIn />
  
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_OUT} component={SignOut} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
  
    </div>
  </Router>
);

export default App;
