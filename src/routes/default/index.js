import React from 'react';
import { Box } from '@spraoi/base';
import Route from '../../components/Route';

const IndexPage = () => (
  <Route isPrivate>
    <h1>Starter UI</h1>
    <Box as="p" fontSize={4} mt={5}>
      Happy hacking 😊
    </Box>
  </Route>
);

export default IndexPage;
