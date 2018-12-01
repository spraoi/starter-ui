import PropTypes from 'prop-types';
import React from 'react';
import { App } from '@spraoi/base';
import config from './config';
import theme from './theme';

const AppWrapper = ({ element }) => (
  <App amplifyConfig={config.amplify} page={element} theme={theme} />
);

AppWrapper.propTypes = {
  element: PropTypes.node.isRequired,
};

export default AppWrapper;
