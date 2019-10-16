import Button from '@spraoi/base/Button';
import PropTypes from 'prop-types';
import React from 'react';

const SubmitButton = ({ children, submitting, ...rest }) => (
  <Button
    mt={7}
    mx="auto"
    submitting={submitting}
    type="submit"
    width="12rem"
    {...rest}
  >
    {children}
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
