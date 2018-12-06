import PropTypes from 'prop-types';
import React from 'react';
import { App, Box } from '@spraoi/base';
import { Page } from '@spraoi/auth';
import Header from '../Header';
import PageSpinner from '../PageSpinner';
import config from '../../config';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
  <App config={config} theme={theme}>
    <Page renderLoading={<PageSpinner />} {...rest}>
      <Header />
      <Box maxWidth="content" mx="auto" px="md" py="md">
        {children}
      </Box>
    </Page>
  </App>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
