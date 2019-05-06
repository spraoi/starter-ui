import React from 'react';
import { Box } from '@spraoi/base';

const NotFoundPage = () => (
  <Box as="h1" fontSize="xxl" my="xxl" textAlign="center">
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
