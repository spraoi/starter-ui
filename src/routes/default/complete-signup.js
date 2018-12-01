import React from 'react';
import { Button, Input, Redirect } from '@spraoi/base';
import { FORM_ERROR } from 'final-form';
import { Field, Form } from 'react-final-form';
import { compose, minLength, required } from '@spraoi/validations';
import FormError from '../../components/FormError';
import AuthContainer from '../../containers/AuthContainer';
import config from '../../config';

const CompleteSignup = props => (
  <AuthContainer {...props}>
    {({ completeNewPasswordChallenge, newPasswordRequired }) => (
      <Form
        onSubmit={async values => {
          try {
            return await completeNewPasswordChallenge(values);
          } catch (e) {
            return { [FORM_ERROR]: e.message };
          }
        }}
        render={formContext => (
          <form onSubmit={formContext.handleSubmit}>
            <Redirect to="/login" when={!newPasswordRequired} />
            <Field
              component={Input}
              label="First Name"
              name="given_name"
              validate={required}
            />
            <Field
              component={Input}
              label="Last Name"
              name="family_name"
              validate={required}
            />
            <Field
              component={Input}
              label="New Password"
              name="password"
              type="password"
              validate={compose(
                minLength(config.minPasswordLength),
                required
              )}
            />
            <FormError error={formContext.submitError} />
            <Button submitting={formContext.submitting} type="submit">
              Complete Signup
            </Button>
          </form>
        )}
      />
    )}
  </AuthContainer>
);

export default CompleteSignup;
