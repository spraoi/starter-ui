import FileUpload from '@spraoi/file-upload';
import React from 'react';
import uuid from 'uuid/v4';
import Route from '../../components/Route';

const Index = () => (
  <Route isPrivate>
    <h1>Data Upload</h1>
    <FileUpload
      allowMultiple
      fileRenameFunction={file => `uploads/${uuid()}.${file.extension}`}
      labelIdle="Drag data files here or <span class=filepond--label-action>browse your device</span>"
    />
  </Route>
);

export default Index;
