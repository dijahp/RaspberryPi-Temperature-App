import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./App.css";

import Dashboard from "../src/components/Dashboard";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";
import SignOut from "../src/components/SignOut";

import * as ROUTES from '../src/constants/routes';

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

// function App() {
//   return (
//     <div className='App'>
//       <Dashboard />
//     </div>
//   );
// }

export default App;
