import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    <Link to={ROUTES.SIGN_IN}>Sign Out</Link>
  </button>
);

export default withFirebase(SignOutButton);