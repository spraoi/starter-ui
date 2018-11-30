import React from 'react';
import { Box, Button } from '@spraoi/base';
import Layout from '../../components/Layout';

const Index = props => (
  <Layout {...props} isPrivate>
    {context => (
      <Box>
        <pre>{JSON.stringify(context, null, 2)}</pre>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <Button>Click Me!</Button>
      </Box>
    )}
  </Layout>
);

export default Index;
