import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import { AuthContext } from '@spraoi/auth';
import { Location } from '@reach/router';
import { parse } from 'query-string';
import Route from '../../components/Route';

const AuthContainer = ({ children }) => (
  <Location>
    {({ location: { search } }) => (
      <Route isPublic redirect={get(parse(search), 'redirect', '/')}>
        <AuthContext.Consumer>{children}</AuthContext.Consumer>
      </Route>
    )}
  </Location>
);

AuthContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AuthContainer;
