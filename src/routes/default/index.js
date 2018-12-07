import FileUpload from '@spraoi/file-upload';
import React from 'react';
import Route from '../../components/Route';

const Index = () => (
  <Route isPrivate>
    <h1>Data Upload</h1>
    <FileUpload
      allowMultiple
      labelIdle="Drag data files here or <span class=filepond--label-action>browse your device</span>"
      onCreateObjectName={name => `uploads/${name}`}
    />
  </Route>
);

export default Index;
