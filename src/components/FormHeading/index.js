import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';

const FormHeading = ({ children, ...rest }) => (
  <Box as="h1" mb={6} textAlign="center" {...rest}>
    {children}
  </Box>
);

FormHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormHeading;
