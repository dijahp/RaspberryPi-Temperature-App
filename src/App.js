import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <SignIn />
      
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
      
    </div>
  </Router>
);

export default App;
