import PropTypes from 'prop-types';
import React from 'react';
import { Box, Button } from '@spraoi/base';

const SubmitButton = ({ children, submitting }) => (
  <Box as={Button} mt="xl" mx="auto" submitting={submitting} type="submit">
    {children}
  </Box>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
