import PropTypes from 'prop-types';
import React from 'react';
import { Context as AuthContext } from '@spraoi/auth';
import Layout from '../../components/Layout/index';

const IndexContainer = ({ children, ...rest }) => (
  <Layout isPrivate {...rest}>
    <AuthContext.Consumer>{children}</AuthContext.Consumer>
  </Layout>
);

IndexContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexContainer;
