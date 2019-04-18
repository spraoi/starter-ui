import PropTypes from 'prop-types';
import React from 'react';
import { Box, Button } from '@spraoi/base';

const SubmitButton = ({ children, submitting, ...rest }) => (
  <Box
    as={Button}
    mt="xl"
    mx="auto"
    submitting={submitting}
    type="submit"
    {...rest}
  >
    {children}
  </Box>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
