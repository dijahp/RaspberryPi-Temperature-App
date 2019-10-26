import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./App.css";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";

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
