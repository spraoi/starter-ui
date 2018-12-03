import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@spraoi/base';

const FormHeading = ({ children }) => (
  <Box as="h1" mb="lg" textAlign="center">
    {children}
  </Box>
);

FormHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormHeading;
