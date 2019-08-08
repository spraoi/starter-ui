import Auth from '@aws-amplify/auth';
import React from 'react';
import { App, Box } from '@spraoi/base';
import { func, node, oneOfType } from 'prop-types';
import Header from '../Header';
import config from '../../config';
import theme from '../../theme';

const Layout = ({ children }) => (
  <App config={config} credentials={Auth.currentCredentials} theme={theme}>
    <Header />
    <Box maxWidth="content" mx="auto" px="md" py="md">
      {children}
    </Box>
  </App>
);

Layout.propTypes = {
  children: oneOfType([func, node]).isRequired,
};

export default Layout;
