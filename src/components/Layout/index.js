import PropTypes from 'prop-types';
import React from 'react';
import { BarLoader } from 'react-spinners';
import { Context as AuthContext, Page } from '@spraoi/auth';
import Header from '../Header';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
  <Page
    {...rest}
    renderLoading={<BarLoader color={theme.colors.textPrimary} />}
  >
    <Header />
    {typeof children === 'function' ? (
      <AuthContext.Consumer>{children}</AuthContext.Consumer>
    ) : (
      children
    )}
  </Page>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Layout;
