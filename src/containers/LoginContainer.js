import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import qs from 'query-string';
import { FORM_ERROR } from 'final-form';
import Layout from '../components/Layout';

const LoginContainer = ({ children: Children, location, ...rest }) => (
  <Layout
    isPublic
    location={location}
    redirect={get(qs.parse(location.search), 'redirect', '/')}
    {...rest}
  >
    {({ signIn }) => (
      <Children
        signIn={async values => {
          try {
            return await signIn(values);
          } catch (e) {
            return { [FORM_ERROR]: e.message };
          }
        }}
      />
    )}
  </Layout>
);

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ search: PropTypes.string.isRequired }).isRequired,
  signIn: PropTypes.func.isRequired,
};

export default LoginContainer;
