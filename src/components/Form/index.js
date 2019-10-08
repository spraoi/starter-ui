import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@spraoi/base';

const Form = ({ children, ...rest }) => (
  <Box as="form" maxWidth="maxWidths.form" mx="auto" {...rest}>
    {children}
  </Box>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
