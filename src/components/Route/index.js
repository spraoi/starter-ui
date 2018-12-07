import PropTypes from 'prop-types';
import React from 'react';
import { Page } from '@spraoi/auth';
import PageSpinner from '../PageSpinner';

const Route = ({ children, ...rest }) => (
  <Page renderLoading={<PageSpinner />} {...rest}>
    {children}
  </Page>
);

Route.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Route;
