import PropTypes from 'prop-types';
import React from 'react';
import { BarLoader } from 'react-spinners';
import { Box } from '@spraoi/base';
import { Context as AuthContext, Page } from '@spraoi/auth';
import Header from '../Header';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
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
      {typeof children === 'function' ? (
        <AuthContext.Consumer>{children}</AuthContext.Consumer>
      ) : (
        children
      )}
    </Box>
  </Page>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
