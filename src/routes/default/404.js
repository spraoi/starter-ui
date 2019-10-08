import React from 'react';
import { Box } from '@spraoi/base';

const NotFoundPage = () => (
  <Box as="h1" fontSize={5} my={8}>
    404:{' '}
    <Box as="span" fontWeight="normal">
      Page not found.{' '}
      <span aria-label="Shrug emoji." role="img">
        🤷
      </span>
    </Box>
  </Box>
);

export default NotFoundPage;
