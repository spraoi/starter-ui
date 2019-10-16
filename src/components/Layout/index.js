import App from '@spraoi/base/App';
import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Auth } from 'aws-amplify';
import Header from '../Header';
import config from '../../config';
import theme from '../../theme';

const Layout = ({ children }) => (
  <App config={config} credentials={Auth.currentCredentials} theme={theme}>
    <Header />
    <Box maxWidth="maxWidths.content" mx="auto" px={5} py={5}>
      {children}
    </Box>
  </App>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
