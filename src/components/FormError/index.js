import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@spraoi/base';

const FormError = ({ children }) =>
  children ? <Box color="error">{children}</Box> : null;

FormError.propTypes = {
  children: PropTypes.string,
};

FormError.defaultProps = {
  children: null,
};

export default FormError;
