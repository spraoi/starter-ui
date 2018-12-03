import React from 'react';
import FileUpload from '@spraoi/file-upload';
import Layout from '../../components/Layout/index';

const Index = props => (
  <Layout isPrivate {...props}>
    <h1>Data Upload</h1>
    <FileUpload
      allowMultiple
      labelIdle="Drag data files here or <span class=filepond--label-action>browse your device</span>"
      onCreateObjectName={name => `uploads/${name}`}
    />
  </Layout>
);

export default Index;
