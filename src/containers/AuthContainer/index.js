import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import qs from 'query-string';
import { AuthConsumer } from '@spraoi/auth';
import { Location } from '@reach/router';
import Route from '../../components/Route';

const AuthContainer = ({ children }) => (
  <Location>
    {({ location: { search } }) => (
      <Route isPublic redirect={get(qs.parse(search), 'redirect', '/')}>
        <AuthConsumer>{children}</AuthConsumer>
      </Route>
    )}
  </Location>
);

AuthContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AuthContainer;
