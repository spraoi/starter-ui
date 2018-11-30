import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import qs from 'query-string';
import Layout from '../components/Layout';

const LoginContainer = ({ children, location, ...rest }) => (
  <Layout
    isPublic
    location={location}
    redirect={get(qs.parse(location.search), 'redirect', '/')}
    {...rest}
  >
    {children}
  </Layout>
);

LoginContainer.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({ search: PropTypes.string.isRequired }).isRequired,
  signIn: PropTypes.func.isRequired,
};

export default LoginContainer;
