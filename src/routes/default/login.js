import React from 'react';
import { Box, Button, Input } from '@spraoi/base';
import { Field, Form } from 'react-final-form';
import { compose, minLength, required } from '@spraoi/validations';
import config from '../../config';
import LoginContainer from '../../containers/LoginContainer';

const Login = props => (
  <LoginContainer {...props}>
    {({ signIn }) => (
      <Form
        onSubmit={signIn}
        render={formContext => (
          <form onSubmit={formContext.handleSubmit}>
            <Field
              component={Input}
              label="Email"
              name="username"
              validate={required}
            />
            <Field
              component={Input}
              label="Password"
              name="password"
              type="password"
              validate={compose(
                minLength(config.minPasswordLength),
                required
              )}
            />
            {formContext.submitError && (
              <Box color="error">{formContext.submitError}</Box>
            )}
            <Button submitting={formContext.submitting} type="submit">
              Sign In
            </Button>
          </form>
        )}
      />
    )}
  </LoginContainer>
);

export default Login;
