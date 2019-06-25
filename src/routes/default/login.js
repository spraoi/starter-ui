import React from 'react';
import { Input, Redirect } from '@spraoi/base';
import { FORM_ERROR } from 'final-form';
import { Field, Form as FinalForm } from 'react-final-form';
import {
  composeValidations,
  email,
  minLength,
  required,
} from '@spraoi/validations';
import AuthContainer from '../../containers/AuthContainer';
import Form from '../../components/Form';
import FormError from '../../components/FormError';
import FormHeading from '../../components/FormHeading';
import SubmitButton from '../../components/SubmitButton';
import config from '../../config';

const LoginPage = () => (
  <AuthContainer>
    {({ newPasswordRequired, signIn }) => (
      <FinalForm
        onSubmit={async values => {
          try {
            await signIn(values);
          } catch (e) {
            return { [FORM_ERROR]: e.message };
          }
        }}
        render={formContext => (
          <Form onSubmit={formContext.handleSubmit}>
            <Redirect to="/complete-signup" when={newPasswordRequired} />
            <FormHeading>Sign In</FormHeading>
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
            <FormError>{formContext.submitError}</FormError>
            <SubmitButton submitting={formContext.submitting}>
              Sign In
            </SubmitButton>
          </Form>
        )}
      />
    )}
  </AuthContainer>
);

export default LoginPage;
