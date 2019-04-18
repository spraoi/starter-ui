import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@spraoi/base';

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
