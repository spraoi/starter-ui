import React from 'react';
import IndexContainer from '../../containers/IndexContainer';

const Index = props => (
  <IndexContainer {...props}>
    {authContext => (
      <React.Fragment>
        <h1>Dashboard</h1>
        <h2>Auth Context</h2>
        <pre>{JSON.stringify(authContext, null, 2)}</pre>
        <h2>Route Props</h2>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </React.Fragment>
    )}
  </IndexContainer>
);

export default Index;
