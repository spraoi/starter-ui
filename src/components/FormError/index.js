import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';

const FormError = ({ children, ...rest }) =>
  children ? (
    <Box color="error" {...rest}>
      {children}
    </Box>
  ) : null;

FormError.propTypes = {
  children: PropTypes.string,
};

FormError.defaultProps = {
  children: null,
};

export default FormError;
