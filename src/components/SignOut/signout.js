import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    <Link to={ROUTES.SIGN_IN}>Sign Out</Link>
  </button>
);

export default withFirebase(SignOutButton);