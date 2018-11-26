import React from 'react';
import config from '../config';

const IndexPage = () => <pre>{JSON.stringify(config, null, 2)}</pre>;

export default IndexPage;
