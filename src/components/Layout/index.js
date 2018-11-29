import PropTypes from 'prop-types';
import React from 'react';
import { BarLoader } from 'react-spinners';
import { Page } from '@spraoi/auth';
import Header from '../Header';
import theme from '../../theme';

const Layout = ({ children, ...rest }) => (
  <Page {...rest} renderLoading={<BarLoader color={theme.colors.text} />}>
    <Header />
    {children}
  </Page>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
