import Box from '@spraoi/base/Box';
import React from 'react';

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
