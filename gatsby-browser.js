import React from 'react';
import { App } from '@spraoi/base';
import config from './src/config';
import theme from './src/theme';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <App amplifyConfig={config.amplify} page={element} theme={theme} />
);
