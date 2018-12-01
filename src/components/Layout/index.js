import PropTypes from 'prop-types';
import React from 'react';
import { App, Box } from '@spraoi/base';
import { BarLoader } from 'react-spinners';
import { Page } from '@spraoi/auth';
import Header from '../Header';
import config from '../../config';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
  <App amplifyConfig={config.amplify} theme={theme}>
    <Page
      {...rest}
      renderLoading={
        <Box display="flex" justifyContent="center" py="xxxl">
          <BarLoader color={theme.colors.textPrimary} />
        </Box>
      }
    >
      <Header />
      <Box maxWidth="content" mx="auto" px="md" py="xl">
        {children}
      </Box>
    </Page>
  </App>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
