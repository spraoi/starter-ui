import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@spraoi/base';

const SubmitButton = ({ children, submitting, ...rest }) => (
  <Button mt="xl" mx="auto" submitting={submitting} type="submit" {...rest}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
