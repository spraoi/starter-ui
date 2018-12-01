import React from 'react';
import { Button, Input, Redirect } from '@spraoi/base';
import { FORM_ERROR } from 'final-form';
import { Field, Form } from 'react-final-form';
import {
  composeValidations,
  email,
  minLength,
  required,
} from '@spraoi/validations';
import AuthContainer from '../../containers/AuthContainer';
import FormError from '../../components/FormError';
import config from '../../config';

const Login = props => (
  <AuthContainer {...props}>
    {({ newPasswordRequired, signIn }) => (
      <Form
        onSubmit={async values => {
          try {
            return await signIn(values);
          } catch (e) {
            return { [FORM_ERROR]: e.message };
          }
        }}
        render={formContext => (
          <form onSubmit={formContext.handleSubmit}>
            <Redirect to="/complete-signup" when={newPasswordRequired} />
            <Field
              component={Input}
              label="Email"
              name="username"
              validate={composeValidations(required, email)}
            />
            <Field
              component={Input}
              label="Password"
              name="password"
              type="password"
              validate={composeValidations(
                minLength(config.minPasswordLength),
                required
              )}
            />
            <FormError error={formContext.submitError} />
            <Button submitting={formContext.submitting} type="submit">
              Sign In
            </Button>
          </form>
        )}
      />
    )}
  </AuthContainer>
);

export default Login;
