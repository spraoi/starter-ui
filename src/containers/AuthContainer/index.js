import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import qs from 'query-string';
import { AuthContext } from '@spraoi/auth';
import Layout from '../../components/Layout';

const AuthContainer = ({ children, location, ...rest }) => (
  <Layout
    isPublic
    location={location}
    redirect={get(qs.parse(location.search), 'redirect', '/')}
    {...rest}
  >
    <AuthContext.Consumer>{children}</AuthContext.Consumer>
  </Layout>
);

AuthContainer.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({ search: PropTypes.string.isRequired }).isRequired,
};

export default AuthContainer;
