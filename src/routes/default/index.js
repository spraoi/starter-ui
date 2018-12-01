import React from 'react';
import { AuthContext } from '@spraoi/auth';
import Layout from '../../components/Layout/index';

const Index = props => (
  <Layout isPrivate {...props}>
    <AuthContext.Consumer>
      {authContext => (
        <React.Fragment>
          <h1>Dashboard</h1>
          <h2>Auth Context</h2>
          <pre>{JSON.stringify(authContext, null, 2)}</pre>
          <h2>Route Props</h2>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </React.Fragment>
      )}
    </AuthContext.Consumer>
  </Layout>
);

export default Index;
