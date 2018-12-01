import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@spraoi/base';

const FormError = ({ error }) =>
  error ? <Box color="error">{error}</Box> : null;

FormError.propTypes = {
  error: PropTypes.string,
};

FormError.defaultProps = {
  error: null,
};

export default FormError;
